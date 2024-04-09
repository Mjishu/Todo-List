class Todo{
    constructor(title,desc,date,priority,status){
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.priority = priority;
        this.status = status;
    }
    
    //! This isnt really needed...
    displayTable(){ 
        console.table({
            Title:this.title,
            Description: this.desc,
            Date: this.date,
            Priority: this.priority,
            Status: this.status
        });
    }

}

export{Todo}