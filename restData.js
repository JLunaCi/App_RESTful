
//datos para la web api que podemos generar con node js
module.exports = function(){

    let data= {
        courses: [
            { id: 1, title: "Agile", seatCapacity: 20, price: 274, instructorName: "John Jones" },
            { id: 2, title: "C#", seatCapacity: 15, price: 345.23, instructorName: "John Jones" },
            { id: 3, title: "Angular", seatCapacity: 13, price: 452, instructorName: "Ross Miller" },
            { id: 4, title: "Java", seatCapacity: 10, price: 232.2, instructorName: "Alex Walker" },
            { id: 5, title: "SQL", seatCapacity: 10, price: 157, instructorName: "Ross Miller" },
            { id: 6, title: "JavaScript", seatCapacity: 20, price: 123, instructorName: "John Jones" },
            { id: 7, title: "Programing Object", seatCapacity: 20, price: 89.87, instructorName: "Alex Walker" },
            { id: 8, title: "Data Analytics", seatCapacity: 15, price: 674, instructorName: "Philip Marrow" },
            { id: 9, title: "Xamarin", seatCapacity: 20, price: 174, instructorName: "John Jones" }
        ] 
    }

    return data;

}