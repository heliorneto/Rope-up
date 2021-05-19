export default Object.freeze({
    BASE_URL: "http://localhost",
    PORT: 8085,
    getFullURL: function(){
        if(this.PORT){
            return this.BASE_URL + ":" + this.PORT;
        }
        return this.BASE_URL;
    }
});