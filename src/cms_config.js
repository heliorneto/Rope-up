export default Object.freeze({
    BASE_URL: "https://www.ropeup.com.br/cms",
    PORT: null,
    getFullURL: function(){
        if(this.PORT){
            return this.BASE_URL + ":" + this.PORT;
        }
        return this.BASE_URL;
    }
});