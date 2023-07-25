// import {
//     collection,
//     addDoc,
//     query,
//     getDocs,
//     doc,
//     deleteDoc,
//     updateDoc,
//   } from 'firebase/firestore';
  
  import { db } from '../firebase/firebase';
//   import { Task } from '../models/Task';
import { collection, addDoc} from 'firebase/firestore';
  
class TaskService {
    constructor() {
        this.collection = 'tasks'
    }

    fethcTasks() {}

    async createTask(task) {
         const collectionRef = collection(db, this.collection)

         const docRef = await addDoc(collectionRef, {
            name: task.name,
            complete: task.complete
         })

         task.id = docRef.id
         return task;
    }

    updateTask() {}
    deleteTask() {}
}
 
