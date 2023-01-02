const textarea = document.querySelector("textarea");
fileNameInput = document.querySelector(".file-name input");
selectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change",()=>{
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File`;
    console.log();
});


saveBtn.addEventListener("click", ()=>{
    const blob = new Blob([textarea.value],{type: selectMenu.value});
    const fileUrl1= URL.createObjectURL(blob);
    console.log(fileUrl1);
    const link = document.createElement("a"); //creating <a> tag
    link.download = fileNameInput.value;//passing file name as download
    link.href = fileUrl1; // passing fileURL as href value of link
    link.click(); // clicking link so the file download
});