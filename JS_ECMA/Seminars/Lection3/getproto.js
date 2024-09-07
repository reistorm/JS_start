// Метод getPrototypeOf позволяет получить ссылку на объект прототип. 
// Давайте узнаем какой объект является прототипом для нашего объекта Djaiv, 
// потом посмотрим кто является его прототипом и кто является прототипом 
// его прототипа:

// Получим прототип для объекта Djaiv. 
const DjaivProto = Object.getPrototypeOf(Djaiv); 
console.log(DjaivProto.model); // dancing series 

const DjaivProtoProto = Object.getPrototypeOf(DjaivProto); 
console.log(DjaivProtoProto.model);  //vacuum cleaner 

const DjaivProtoProtoProto = Object.getPrototypeOf(DjaivProtoProto); 
console.log(DjaivProtoProtoProto); // [object Object]

// В последнем прототипе мы не стали смотреть свойство model, т.к. там его нет, 
// мы добрались до самого высокого родителя, которым является объект Object, 
// все объекты наследуются от него. Если мы попытаемся получить его прототип, 
// то в ответ получим null, т.к. Объект Object не имеетпрототипа. 
