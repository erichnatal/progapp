const cars = [{brand: "Fiat", name: "Uno"}, {brand: "Ford", name: "Fiesta"}] 

export class VehicleController{
    static getCars(req, res){
        return res.status(200).send(cars)
    }
}