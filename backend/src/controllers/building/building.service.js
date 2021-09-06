/**
 * @TODO : Mongoose modellek segítségével frissitsen egy 'building' entitást az adatbázisban.
 * - el kell menteni egy új "classroom" entitást.
 * - ki kell nyeri az új "classroom" id-ját.
 * - az id-t helyezze el a megfelelő 'Building' entitás 'classrooms' listájába
 *
 * A @getAll metódus adja vissza a populált teljes "building" listát
 */

 const ClassroomModel = require('../../models/classroom.model');
 const BuildingModel = require('../../models/building.model');

 exports.update = (buildingId, className) => {

    const classroom = new ClassroomModel({
        name: className
    });

    return classroom.save().then(
        classroom => 
        {
        return BuildingModel.findByIdAndUpdate(
            
            buildingId,
            { $push: { classrooms: classroom._id } },
            { new: true }
            
        );
    });

};

exports.getAll = () => {
    return BuildingModel.find().populate('classrooms');
} 