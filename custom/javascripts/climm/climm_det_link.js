<!--	This is getting executing on click of submit and validate button -->
function fnValidateData()
 {
	 	if (!fnCheckMandatoryFields())
		{
			return false;
		}
		return true;
	
}

function fnValAmt(obj)
{ 
	var crAmt = millionFormat(obj.value);
	if(!fnIsNull(crAmt))
	{
		if(!isNaN(crAmt))
		{
			obj.value = Number(crAmt).toLocaleString();
		}
		else
		{
			alert("Invalid Amount");
			obj.focus();
			obj.value="";
			return false;
		}
	}
}

function millionFormat(obj){
	var lastChar = obj[obj.length -1];
	lastChar = lastChar.toUpperCase();	
	initChar = obj.slice(0, -1);	
	var finalValue = "";
	
	switch(lastChar)	
	{
		case 'T':
			finalValue = parseFloat(initChar) * 1000;			
			break;		
		case 'L':	
			finalValue = parseFloat(initChar) * 100000; 
			break;
		case 'M':	
			finalValue = parseFloat(initChar) * 1000000; 
			break;
		case 'B':	
			finalValue = parseFloat(initChar) * 1000000000;
			break;
		
		default: 
			finalValue = obj;
			break;	
	}	
	return finalValue;
}

function validateCredPeriod(obj)
{
	if(isNaN(obj.value))
	{
		alert("Credit Period should be numeric");
		obj.focus();
		obj.value="";
		return false;
	}
	else
	{
		if(obj.value>360)
		{
			alert("Credit Period should be Lessr Than or Equal to 360");
			obj.focus();
			obj.value="";
			return false;
		}
		else
		{
			return true;
		}
	}
	
}

function removeThousandSeparator()
{ 
	var crAmt1 = document.forms[0].premiumAmt.value;
	var crAmt2 = document.forms[0].credAmt.value;
	//var crAmt3 = document.forms[0].capAmt.value;
	var crAmt4 = document.forms[0].insAmt.value;
	var crAmt5 = document.forms[0].comissionAmt.value;
	
	if(!fnIsNull(crAmt1))
	{				
		document.forms[0].premiumAmt.value = parseInt(crAmt1.replace(/,/g,""));	
	}
	
	if(!fnIsNull(crAmt2))
	{				
		document.forms[0].credAmt.value = parseInt(crAmt2.replace(/,/g,""));	
	}
	//if(!fnIsNull(crAmt3))
	//{				
	//	document.forms[0].capAmt.value = parseInt(crAmt3.replace(/,/g,""));	
	//}
	if(!fnIsNull(crAmt4))
	{				
		document.forms[0].insAmt.value = parseInt(crAmt4.replace(/,/g,""));	
	}
	if(!fnIsNull(crAmt5))
	{				
		document.forms[0].comissionAmt.value = parseInt(crAmt5.replace(/,/g,""));	
	}
	
}

function climm_det_post_ONLOAD()
{	
	//fnlistInsCover();
	loadCoverNoteInfo();
	if(funcCode=="A")
	{
		//document.getElementById("credPeriod").disabled = true;
		//document.getElementById("credAmt").disabled = true;
		//document.getElementById("capAmt").disabled = false;
		document.forms[0].policyType.value = "PERSONAL";
	}
	else if ((funcCode=="M") || (funcCode=="X") || (funcCode=="D") || (funcCode=="V")|| (funcCode=="I"))
	{
		//document.getElementById("credPeriod").disabled = true;
		//document.getElementById("credAmt").disabled = true;
		document.forms[0].premiumAmt.value=parseInt(document.forms[0].premiumAmt.value).toLocaleString();
		document.forms[0].insAmt.value=parseInt(document.forms[0].insAmt.value).toLocaleString();
		document.forms[0].comissionAmt.value=parseInt(document.forms[0].comissionAmt.value).toLocaleString();
		loadCoverTbl();
		
		if((funcCode=="X") || (funcCode=="D") || (funcCode=="V") || (funcCode=="I"))
		{
			document.getElementById('l6potbl').disabled=true;
			
		}
		else
		{
			document.getElementById('l6potbl').disabled=false;
		}
	}
	else 
	{
		//loadCoverTbl();
		
		
	}
	
	return true;
}

function fnChangeFuncCode()
{
	return true;
}

function loadCoverNoteInfo(){
	
	var ObjForm = document.forms[0];
	var arr_policyDescA = ObjForm.policyDescA.value.split("!");
	var a;
	for(a = 1; a < arr_policyDescA.length; a++){
		
		var nextRowNum = document.getElementById("l6potbl").rows.length;	
		var table = document.getElementById("l6potbl");
		var row = table.insertRow(nextRowNum);	
		row.className = "tr_1 tr_2";	
		row.onclick = function () {fnTableOnClick(this.rowIndex);};
		
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);	
						
		var chkbox = document.createElement('input');
		chkbox.type = "checkbox";
		chkbox.id = "chkRelease" ;
		chkbox.name = "chkRelease" ;
		cell1.appendChild(chkbox);
		
		cell2.innerHTML =   arr_policyDescA[a];
		
	}	
}

function loadCoverTbl()
{
	var input = "insId|"+insId;
	var scrName = "coverType_list.scr";
	var output = "";
	var retVal = appFnExecuteScript(input,output,scrName,false);
	var token = retVal.split("|");
		
	if(token[1]=='ERR')
	{
		return true;
	}
		
	else
	{
		var Val2=token[1];
		var count2=parseInt(token[5]);
		var table2 = document.getElementById("l6potbl").value;
		var ObjForm = document.forms[0];
		var arr_coverType = Val2.split("!");
		for(var a=1;a<=count2;a++)
		{
			if(arr_coverType[a]=='Y')
			{
				document.getElementById("l6potbl").rows[a].cells[0].children[0].checked = true;
			}
			else
			{
				document.getElementById("l6potbl").rows[a].cells[0].children[0].checked = false;
			}
		}
	}
	
}

function climm_det_pre_ONCLICK(obj)
{
	var ObjForm = document.forms[0];
	if(obj.id == "Submit")
	{
		//fnValAmt(obj);
		removeThousandSeparator();
		if(funcCode=="A")
		{
			clickSubmitAdd();
		
			if(Date.parse(document.forms[0].startDate.value) >= Date.parse(document.forms[0].endDate.value))
			{
				alert("Policy End Date must be greater than Policy Start Date");
				return false;
			}
		}
		else if((funcCode=="M") || (funcCode=="X") || (funcCode=="V") ||(funcCode=="D") ||(funcCode=="N") ||(funcCode=="I"))
		{
			clickSubmitModify();
		}
		else
		{
			return true;
		}
	}
}

function clickSubmitAdd()
{
	var table = document.getElementById('l6potbl');
	var policyDesc = "";
	var chekVal = "";
	
	for (var r = 1, n = table.rows.length; r < n; r++) {		
		if(table.rows[r].cells[0].children[0].checked){
			chekBoxVal = "Y";			
		}else{
			chekBoxVal = "N";
		}
		var chekVal =  chekVal.concat(chekBoxVal,"!");
		var policyDesc =  policyDesc.concat(table.rows[r].cells[1].innerHTML,"!");
	}
	document.forms[0].chekValA.value = chekVal;
	document.forms[0].policyDescA.value = policyDesc;
	document.forms[0].insCover2.value=table.rows.length;
}

function clickSubmitModify()
{
	var table = document.getElementById('l6potbl');
	var policyDesc = "";
	var chekVal = "";
	
	for (var r = 1, n = table.rows.length; r < n; r++) {		
		if(table.rows[r].cells[0].children[0].checked){
			chekBoxVal = "Y";			
		}else{
			chekBoxVal = "N";
		}
		var chekVal =  chekVal.concat(chekBoxVal,"!");
		var policyDesc =  policyDesc.concat(table.rows[r].cells[1].innerHTML,"!");
	}
	document.forms[0].chekValA.value = chekVal;
	document.forms[0].policyDescA.value = policyDesc;
	document.forms[0].insCover2.value=table.rows.length;	
}

function fnlistInsCover()
{
	var input = "insId|" ;
	var scrName = "insCover_list.scr";
	var output = "";
	var retVal = appFnExecuteScript(input,output,scrName,false);
	var token = retVal.split("|");
		
		if(token[1]=='ERR')
		{
			alert("Insuarance Cover Type not et up ");
			document.forms[0].premiumAmt.value = "";
			document.forms[0].premiumAmt.focus();
			return false;
		}
		
		else
		{
			var Val=token[1];
			var count=token[3];
			//document.forms[0].insCover1.value = Val;
			var ObjForm = document.forms[0];
			var arr_insCover1 = Val.split("!");
			var insCover1= document.getElementById('insCover1');
			for(var i=1;i<=count;i++)
			{
				insCover1.options[insCover1.options.length] = new Option(arr_insCover1[i],arr_insCover1[i]);
			}
		}
}

function addNewRowToList2() {
	var table = document.getElementById("l6Na2");
	var nextRowNum = table.rows.length;
	//var mainTblSelRowId = document.forms[0].currentSelRow.value;
	var row = table.insertRow(nextRowNum);	
	
	row.className = "tr_1 tr_2";	
	//row.onclick = function () {fnTableOnClick2(this.rowIndex);};
	//table.rows[r].cells[0]
	//alert(table2.rows[mainTblSelRowId].cells[3].innerHTML);
	//alert(table2.rows[mainTblSelRowId].cells[4].innerHTML);
	
	var cell1 = row.insertCell(0);
	//var cell2 = row.insertCell(1);
	
	//cell1.innerHTML = document.forms[0].value;
	cell1.innerHTML = document.getElementById("insCover1").value;
}

function fnTableOnClick(obj){
	var table = document.getElementById('l6potbl');
	for (var r = 1, n = table.rows.length; r < n; r++) {
		document.getElementById("l6potbl").rows[r].className = "tr_unselected tr_2 tr_1";
	}
	//select row
	document.getElementById("l6potbl").rows[obj].className = "tr_selected";
	document.forms[0].currentSelRow.value=obj;
		
}

function insCoverChange()
{
	
	return true;
	
}

function comissionVal()
{
	setTSAmount(document.getElementById("premiumAmt"));
	
	var premiumAmt = parseFloat(document.getElementById("premiumAmt").value.replace(/,/g, ''));
	if(premiumAmt != "")
	{
		var input = "premiumAmt|" + premiumAmt;
		var scrName = "climm_premiumAmt.scr";
		var output = "";
		var retVal = appFnExecuteScript(input,output,scrName,false);
		var token = retVal.split("|");
		
		if(token[1]=='ERR')
		{
			alert("Premium Amount is Invalid");
			document.forms[0].premiumAmt.value = "";
			document.forms[0].premiumAmt.focus();
			return false;
		}
		
		else
		{
			var Val=token[1];
			document.forms[0].comissionAmt.value = Number(Val).toLocaleString();
			document.forms[0].premiumAmt.value = Number(premiumAmt).toLocaleString();
			document.getElementById("comissionAmt").disabled = true;
		}
	}
	else
	{
			document.forms[0].premiumAmt.value = "";
			document.forms[0].comissionAmt.value = "";
			
			document.forms[0].premiumAmt.focus();
	}
	//fnValAmt1();
}

//function capVal()
//{
//	var value = 0.00;
//	var premiumAmt1 = millionFormat(document.getElementById("premiumAmt").value).toLocaleString();
//	alert(premiumAmt1 );
//	var credAmt1 = millionFormat(document.getElementById("credAmt").value).toLocaleString();
//	alert(credAmt1 );
//	var premiumAmt2 = parseInt(premiumAmt1.replace(/,/g,""));
//	var credAmt2= parseInt(credAmt1.replace(/,/g,""));
//	
//	value = premiumAmt2 -credAmt2;
//	alert(value);
//	document.forms[0].capAmt.value = value.toLocaleString();
//	document.forms[0].credAmt.value = credAmt2.toLocaleString();
//	document.getElementById("capAmt").disabled = true;
//}






function setTSAmount(fielId)
{
        var amt1 = fielId.value.replace(/,/g, '');
		
		var regex  = /^\d+(?:\.\d{0,2})$/;		
		if (regex.test(amt1))
		{
			amt1 = millionFormat(amt1);
			if(!isNaN(amt1 )){
					fielId.value = Number(amt1).toLocaleString();
			}
		}
		else
		{	
			if(!isNaN(amt1 )){
					fielId.value = Number(amt1).toLocaleString();
			}
			else
			{
				alert("Invalid amount");
				fielId.value="0.00";
				fielId.focus;
			}
			
		}
			

		
}

function cifValidate(obj)
{
	
	var cifId = obj.value.toUpperCase();
	if(cifId != "")
	{
		var input = "cifId|" + cifId;
		var scrName = "climm_cifValidate.scr";
		var output = "";
		var retVal = appFnExecuteScript(input,output,scrName,false);
		var token = retVal.split("|");
		if(token[1]=='ERR')
		{
		alert("CIF Id is Invalid");
		document.forms[0].cifId.value = "";
		document.forms[0].cifId.focus();
		return false;
		}
		else
		{
		document.forms[0].custName.value = token[1];
		}
	}
	else
	{
	document.forms[0].cifId.value = "";
	document.forms[0].custName.value = "";
	document.forms[0].cifId.focus();
	}
		
}
