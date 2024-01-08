let arr=[1,2,2,6,6,4,8,8,5,1]
document.write("Given array = "+arr+"<br><br>")
let temp=[];
let boolean=false;
let dub=[]
for(let i=0;i<arr.length;i++){
    if(temp.length==0){
        temp.push(arr[i])
    }
    else{
        for(let j=0;j<temp.length;j++){
            if(temp[j]!=arr[i]){
                boolean=true
            }
            
            else{
                boolean=false
                break
            }
        }
        if(boolean){
            temp.push(arr[i])
            boolean=false
        }
        else{
            dub.push(arr[i])
        }
    }
}

document.write("Delete dublicate = "+temp)
document.write(" <br><br>Dublicate numbers = "+dub)