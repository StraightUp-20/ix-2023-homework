  export class Task {
    constructor(id, description, complete) {
        this.id = id;
        this.description = description;
        this.complete = complete;
    }

    static fromJSON(json){
        return new Task(json.id, json.description, json.complete)
    }
}
