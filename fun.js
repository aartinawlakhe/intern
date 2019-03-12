//var entry=document.getElementById("entry");
//entry.addEventListener("click",myFunction1);
var row=1;
	function myFunction1() {
		var name = document.getElementById("name").value;
		var phone = document.getElementById("phone").value;
		var table = document.getElementById("table");
		var newrow = table.insertRow(row);
		var cell1 = newrow.insertCell(0);
		var cell2 = newrow.insertCell(1);
		var cell3 = newrow.insertCell(2);
		cell1.innerHTML=name;
		cell2.innerHTML=phone;
		cell3.innerHTML="<input type=\"button\"value=\"Delete\"onclick=\"deleterow(this)\">"
		row++;
	}
	function deleterow(btn){
		var i = btn.parentNode.parentNode.rowIndex;
		document.getElementById("table").deleteRow(i);
	}
	function myFunction(){
		var x = document.getElementById("name").value;
		document.getElementById("demo").innerHTML = x;
		var y = document.getElementById("phone").value;
		document.getElementById("demo1").innerHTML = y;
	}