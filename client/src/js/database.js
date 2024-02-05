import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  const jate = await openDB('jate', 1); // open the database
  const tx = jate.transaction('jate', 'readwrite');// start a transaction
  const store = tx.objectStore('jate');// get the object store
  await store.put(content);// add the content to the object store
  await tx.done;// complete the transaction
  console.log('content added to database');
};

export const getDb = async () => {
  const jate = await openDB('jate', 1); 
  const tx = jate.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const content = await store.getAll(); // get all the content from the object store
  await tx.done;
  return content; // return the content
};

initdb();
