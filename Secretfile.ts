(() => {
    class SecretFile {
        secretMessage(){
            console.log("Shhhhh...");
        }
    }
    const secretfile = new SecretFile();
    secretfile.secretMessage();
})();

