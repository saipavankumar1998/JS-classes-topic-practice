class ListBinding{
        constructor (element){
            this.listElement=element;
            this.textList=["yo", "bro", "supp"];
        }
        
        //makes an <li>text</li> element 
        static createListItem(text){
            const li=document.createElement("li");
            li.textContent=text;
            return li;
        }
        ///for updatting the dom tree
    update(){
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild)
        }
        this.textList.forEach(text => {
            this.listElement.appendChild(ListBinding.createListItem(text))
        });
    }
    //pushing elements to the array
    add(text){
        this.textList.push(text);
        this.update();
    }

    //removing elements from the array
    remove(index){
        this.textList.splice(index,1)
        this.update();
    }

}
const listBinding=new ListBinding(myList)

