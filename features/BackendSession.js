const request = require('request')

class BackendSession {
    constructor() {
        if(arguments.length == 1){
            this.url = arguments[0]
        }
        else{
            this.url = `http://${arguments[0]}:${arguments[1]}`            
        }
        this.statusCode = 0        
    }

    send(bodyObject, typeSent) {
        
        const options = {
            url: `${this.url}/${typeSent}`,
            method: 'POST',
            json: true,
            body: bodyObject
        }

        request(options, (err, res, body) => {
            if(res != undefined){
                this.statusCode = res.statusCode
                this.delete(body, typeSent)
            }
        })

    }

    statusCode() {
        return this.statusCode
    }

    delete(object, typeSent) {
        const options = {
            url: `${this.url}/${typeSent}/${object._id}`,
            method: 'DELETE',
            json: true
        }

        request(options, (err, res, body) => {
        })
    }

    // to get an object, we make one, search for it and delete it afterwards
    get(requestedObject, objectType) {

        let http_options = {
            url: `${this.url}/${objectType}`,
            method: 'POST',
            json: true,
            body: requestedObject
        }
        
        request(http_options, (err, res, body) => {
            if(body != undefined)
            {
                this.objectId = body._id
                
                if(res.statusCode < 400){
                // request to delete object
                    let http_options2 = {
                        url: `${this.url}/${objectType}/${this.objectId}`,
                        method: 'DELETE',
                        json: true
                    }

                    request(http_options2, (err, res, body) => {
                        this.statusCode = res.statusCode

                    })
                } else {
                    this.statusCode = res.statusCode
                }
            }

        })
    }

    deleteNew(objectToDelete, objectType) {

        let http_options = {
            url: `${this.url}/${objectType}`,
            method: 'POST',
            json: true,
            body: objectToDelete
        }
        
        request(http_options, (err, res, body) => {
            if(body != undefined){
            this.objectId = body._id
            
            if(res.statusCode < 400){
            // request to get the object
                let http_options2 = {
                    url: `${this.url}/${objectType}/${this.objectId}`,
                    method: 'GET',
                    json: true
                }

                request(http_options2, (err, res, body) => {
                    this.statusCode = res.statusCode

                    // delete the object
                    this.delete(body, objectType)

                })
            } else {
                this.statusCode = res.statusCode
            }
        }
        })
     

    }

    modify(objectToCreate, modifiedObject, objectType) {

        let http_options = {
            url: `${this.url}/${objectType}`,
            method: 'POST',
            json: true,
            body: objectToCreate
        }
        
        request(http_options, (err, res, body) => {
            if(body != undefined){
            this.objectId = body._id
            
            if(res.statusCode < 400){
            // request to get the object
                let http_options2 = {
                    url: `${this.url}/${objectType}/${this.objectId}`,
                    method: 'PATCH',
                    json: true,
                    body: modifiedObject
                }

                request(http_options2, (err, res, body) => {
                    this.statusCode = res.statusCode

                    // delete the object
                    this.delete(body, objectType)

                })
            } else {
                this.statusCode = res.statusCode
            }
        }

        })

    }


}

    module.exports = BackendSession