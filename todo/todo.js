const fs = require('fs');

const filePath = './tasks.json'

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
        
        
    } catch (error) {
        return []
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJSON)
}

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push(task);
    saveTasks(tasks)
    console.log('Task added', task);
};

const listTask = () => {
    const tasks = loadTasks()
    tasks.forEach((task, index) => {
        console.log(`${index + 1} - ${task}`);
        
    })
};

const removeTask = (index) => {
    const tasks = loadTasks()
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        saveTasks(tasks);
        console.log(`Removing task ${index + 1}`);
        
    } else{
        console.log('Invalid index');
        
    }
}

const command = process.argv[2];
const argument = process.argv[3]

if (command === 'add') {
    addTask(argument);
} else if (command === 'list') {
    listTask()
} else if (command === 'remove') {
    removeTask(parseInt(argument)-1)
} else{
    console.log('Command not found!');
    
}