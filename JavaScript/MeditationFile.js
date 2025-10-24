class MeditationFile{
    constructor(name, type, filePath){
        this.name = name;
        this.type = type;
        this.filePath = filePath;
    }

    getAudioFile(){
        return this.filePath;
    }
    getType(){
        return this.type;
    }
    getName(){
        return this.name;
    }
}