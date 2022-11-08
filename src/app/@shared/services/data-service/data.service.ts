import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Action, AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction, DocumentSnapshotDoesNotExist, DocumentSnapshotExists } from '@angular/fire/compat/firestore';
import { from, map, Observable } from 'rxjs';
import { BaseService } from '../@base/base.service';

type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable({
  providedIn: 'root'
})
export class DataService<T> extends BaseService {

  constructor(
    @Inject('serviceName') public serviceName: string,
    @Inject('entityName') public entityName: string,
    public httpClient: HttpClient,
    public afs: AngularFirestore
  ) {
    super(serviceName, entityName, httpClient);
  }

  /**
   * Adds the specified entity (item) to the collection (database)
   **/
  create<T>(entity: T) {
    const timestamp = Date.now;
    return this.getCollectionReference<T>(this.entityName).add({
      ...entity,
      dateCreated: timestamp,
      dateModified: timestamp,
    });
  }

  /**
   * Gets and returns all the T entities
   **/
  getAll() {
    return this.getCollection<T>(this.entityName).pipe(map((values) => values.map((value) => { return this.mapValues(value); })));
  }

  /**
   * Gets and returns all the T entity(ies) using the specified predicate
   **/
  getBy(predicate: any) {
    const key = Object.keys(predicate)[0];
    const value = predicate[key];
    return this.getCollection<T>(this.entityName, ref => ref.where(key, `==`, value));
  }

  /**
   * Gets and returns the first or default entity using the specified predicate
   **/
  getSingleOrDefaultBy(predicate: any) {
    return this.getBy(predicate).pipe(map((docs) => {
      return (docs) ? docs[0] : null;
    }));
  }

  /**
   * Gets and returns all the T entity(ies) with the specified ID
   **/
  getById(id: any) {
    return this.getCollection<T>(this.entityName, ref => ref.where(`id`, `==`, id));
  }

  /**
   * Gets and returns the first or default entity with the specified ID
   **/
  getSingleOrDefaultById(id: any) {
    return this.getById(id).pipe(map((docs) => {
      return (docs) ? docs[0] : null;
    }));
  }

  /**
   * Updates an entity with the specified id and data, if it exists
   * @param id the id of the entity to be updated
   * @param data the data with the changes to be applied
   */
  update(id: any, data: T) {
    throw new Error('Method not implemented.');
  }

  /**
   * Deletes the specified entity
   */
  delete(id: any) {
    return this.getDocumentReference<T>(`${this.entityName}/${id}`).delete();
  }

  /**
   * Maps the reference value(s) for the specified value of type T
   * @param value the type T value to map other values for
   */
  mapValues(value: T): T {
    return value;
  }

  /**
   * Gets a reference to a collection
   **/
  private getCollectionReference<T>(ref: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.afs.collection<T>(ref, queryFn) : ref;
  }

  /**
   * Gets a reference to a document
   **/
  private getDocumentReference<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.afs.doc<T>(ref) : ref;
  }

  /**
   * Gets and returns the collection of type T as an Observable
   **/
  private getCollection<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.getCollectionReference(ref, queryFn)
      .snapshotChanges()
      .pipe(
        map((docs: DocumentChangeAction<T>[]) => {
          return docs.map((a: DocumentChangeAction<T>) => a.payload.doc.data()) as T[];
        }),
      );
  }

  /**
   * Gets and returns the collection of type T with IDs as an Observable
   **/
  getCollectionWithIds<T>(ref: CollectionPredicate<T>, queryFn?): Observable<any[]> {
    return this.getCollectionReference(ref, queryFn)
      .snapshotChanges()
      .pipe(
        map((actions: DocumentChangeAction<T>[]) => {
          return actions.map((a: DocumentChangeAction<T>) => {
            const data: Object = a.payload.doc.data() as T;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }),
      );
  }

  /**
   * Gets and returns the documents of type T as an Observable
   **/
  private getDocuments<T>(ref: DocPredicate<T>): Observable<T> {
    return this.getDocumentReference(ref)
      .snapshotChanges()
      .pipe(
        map((doc: Action<DocumentSnapshotDoesNotExist | DocumentSnapshotExists<T>>) => {
          return doc.payload.data() as T;
        }),
      );
  }
}
