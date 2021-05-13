export default Object.freeze({
    BASE_URL: "https://ropeup-cms-test.herokuapp.com",
    PORT: null,
    getFullURL: function(){
        if(this.PORT){
            return this.BASE_URL + ":" + this.PORT;
        }
        return this.BASE_URL;
    }
});