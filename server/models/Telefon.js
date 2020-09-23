const Telefon = (connection,dataTypes) => {
    connection.define("Telefon",
    {
        marca:{
            type:dataTypes.STRING
        },
        model:{
            type:dataTypes.STRING
        },
        rezolutieCamera:{
            type:dataTypes.INTEGER
        },
        are5G:{
            type:dataTypes.BOOLEAN
        }
    },
    {freezeTableName:true})
}


module.exports = Telefon;