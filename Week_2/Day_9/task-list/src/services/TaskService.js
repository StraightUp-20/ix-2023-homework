import { db } from '../firebase/firebase';
import { Task } from '../models/Task';
import { collection, addDoc, query, getDocs, doc, deleteDoc, updateDoc} from 'firebase/firestore';

  
class TaskService {
    constructor() {
        this.collection = 'tasks'
    }

    async fetchTasks () {
        const collectionRef = collection(db, this.collection)
        const q = query(collectionRef)
        const querySnapshot = await getDocs(q);

        const tasks = []
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const task = new Task(doc.id, data.description, data.complete)
            tasks.push(task)

        })

        return tasks;
    }

    async createTask(task) {
        const collectionRef = collection(db, this.collection);
        const docRef = await addDoc(collectionRef, {
            description: task.description ,
            complete: task.complete
        })

        task.id = docRef.id;
        return task;
    }

    async updateTask(task) {
        const docRef = doc(db, this,collection, task.id)

        await updateDoc(docRef, {
            description: task.description,
            complete: task.complete
        })

        return task;
    }

    async deleteTask(taskId) {
        const docRef = doc(db, this.collection, taskId)
        await deleteDoc(docRef);
    }
    }


    const service = new TaskService();
    export default service;
 
