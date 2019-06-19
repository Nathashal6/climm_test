<!--	This is getting executing on click of submit and validate button -->
function fnValidateData()
 {
	 	if (!fnCheckMandatoryFields())
		{
			return false;
		}
		return true;
	
}

function fnCheckMandatoryFields()
{
	
		var ObjForm = document.forms[0];

		if(ObjForm.startDate.value == "" )
		{
			alert("Policy Start Date is mandatory");		
			document.forms[0].startDate.focus();
			return false;
		}
		
		if(ObjForm.endDate.value == "" )
		{
			alert("Policy End Date is mandatory");		
			document.forms[0].endDate.focus();
			return false;
		}

		//if(ObjForm.expiryDate.value == "" )
		//{
		//	alert("Cover Note Expiry Date is mandatory");		
		//	document.forms[0].expiryDate.focus();
		//	return false;
		//}
		
		if(ObjForm.premiumAmt.value == "" )
		{
			alert("Premium Amount is mandatory");		
			document.forms[0].premiumAmt.focus();
			return false;
		}
		
		if(ObjForm.insAmt.value == "" )
		{
			alert("Insurance Amount is mandatory");		
			document.forms[0].insAmt.focus();
			return false;
		}
		
		if(ObjForm.insName.value == "" )
		{
			alert("Insurance Company is mandatory");		
			document.forms[0].insName.focus();
			return false;
		}
		
		if(ObjForm.insAmt.value <= 0 )
		{
			alert("Insurance Amount should be greater than zero");		
			document.forms[0].insAmt.focus();
			return false;
		}

		if(insProvider == "SLFL ON CREDIT")
		{
			if(ObjForm.credAmt.value == "" )
			{
				alert("Credit Amount is mandatory");		
				document.forms[0].credAmt.focus();
				return false;
			}
			
			if(ObjForm.credPeriod.value == "" )
			{
				alert("Credit Period is mandatory");		
				document.forms[0].credPeriod.focus();
				return false;
			}
			
			if(ObjForm.credAmt.value <= 0 )
			{
				alert("Credit Amount should be greater than 0");		
				document.forms[0].credAmt.focus();
				return false;
			}
			
			if(ObjForm.credPeriod.value <= 0 )
			{
				alert("Credit Period should be greater than 0");		
				document.forms[0].credPeriod.focus();
				return false;
			}
			
			if(Number(ObjForm.credAmt.value) > Number(ObjForm.premiumAmt.value))
			{
				alert("Credit Amount Should Be lesser than Premium Amount");		
				document.forms[0].credPeriod.focus();
				return false;
			}

			
		}
		
	return true;
}

function setTSAmount(fielId)
{
        var amt1 = fielId.value.replace(/,/g, '');
		
		var regex  = /^\d+(?:\.\d{0,2})$/;		
		if (regex.test(amt1))
		{
			amt1 = millionFormat(amt1);
			if(!isNaN(amt1 )){
				if(Number(amt1)<0)
				{
					alert("Value cannot be less than 0");
					amt1=0;
					
				}
				fielId.value = Number(amt1).toLocaleString();
			}
		}
		else
		{	
			if(!isNaN(amt1 )){
				if(Number(amt1)<0)
				{
					alert("Value cannot be less than 0");
					amt1=0;
					
				}
				fielId.value = Number(amt1).toLocaleString();
			}
			else
			{
				alert("Invalid amount");
				fielId.value="0.00";
				fielId.focus;
				return;
			}
			
		}
		
		
		
			

		
}

function endDateValidation()
{
	var Date1 = document.forms[0].startDate.value;
	if(Date1 != "")
	{
		var input = "startDate|" + Date1;
		var scrName = "climm_endDate.scr";
		var output = "";
		var retVal = appFnExecuteScript(input,output,scrName,false);
		var token = retVal.split("|");
		
		if(token[1]=='ERR')
		{
			alert("Start Date is Invalid");
			document.forms[0].startDate.value = "";
			document.forms[0].startDate.focus();
			return false;
		}
		
		else
		{
			var Val=token[1];
			if(Val == "")
			{
				document.forms[0].endDate.value = "";
			}
			else
			{
				document.forms[0].endDate_ui.value = Val;
			}
			document.forms[0].endDate_ui.value = Val;
			document.forms[0].endDate.value = Val;
		}
	}
	else
	{
			document.forms[0].startDate.value = "";
			document.forms[0].endDate.value = "";
			
			document.forms[0].startDate.focus();
	}
}

function endDateVal()
{
	var startDate = document.forms[0].startDate.value;
	var endDate = document.forms[0].endDate.value;

	if(endDate != "")
	{
		var input = "startDate|" + startDate + "|endDate|" +endDate;
		var scrName = "climm_endDateValidation.scr";
		var output = "";
		var retVal = appFnExecuteScript(input,output,scrName,false);
		var token = retVal.split("|");
		
		if(token[1]=='ERR')
		{
			alert("End Date is Invalid");
			document.forms[0].endDate.value = "";
			document.forms[0].endDate.focus();
			return false;
		}
		
		else
		{
			var Val=Number(token[1]);
			if(Val >= 365)
			{
				alert("Policy End Date should be 1 year from Policy Start Date");
				document.forms[0].endDate.focus();
				document.forms[0].endDate.value="";
				return false;
			}
			
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
		if(obj.value<0) 
		{
			alert("Credit Period should be a positive number");
			obj.focus();
			obj.value="";
			return false;
		}
		return true;
		
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
		document.forms[0].premiumAmt.value = parseFloat(crAmt1.replace(/,/g,""));	
	}
	
	if(!fnIsNull(crAmt2))
	{				
		document.forms[0].credAmt.value = parseFloat(crAmt2.replace(/,/g,""));	
	}
	//if(!fnIsNull(crAmt3))
	//{				
	//	document.forms[0].capAmt.value = parseInt(crAmt3.replace(/,/g,""));	
	//}
	if(!fnIsNull(crAmt4))
	{				
		document.forms[0].insAmt.value = parseFloat(crAmt4.replace(/,/g,""));	
	}
	if(!fnIsNull(crAmt5))
	{				
		document.forms[0].comissionAmt.value = parseFloat(crAmt5.replace(/,/g,""));	
	}
	
}

function climm_det_post_ONLOAD()
{	
	if((funcCode=="A") || (funcCode=="N"))
	{
		loadCoverNoteInfo();
		if(insProvider == "SLFL ON CREDIT")
		{
			document.getElementById("credPeriod").disabled = false;
			document.getElementById("credAmt").disabled = false;	
		}
		else
		{
			document.getElementById("credPeriod").disabled = true;
			document.getElementById("credAmt").disabled = true;	
			document.getElementById("credPeriod").value = 0;
			document.getElementById("credAmt").value = 0.00;	
		}
	}
	else if(funcCode=="M")
	{
		loadCoverTbl();
		if(insProvider == "SLFL ON CREDIT")
		{
			document.getElementById("credPeriod").disabled = false;
			document.getElementById("credAmt").disabled = false;	
		}
		else
		{
			document.getElementById("credPeriod").disabled = true;
			document.getElementById("credAmt").disabled = true;	
			document.getElementById("credPeriod").value = 0;
			document.getElementById("credAmt").value = 0.00;
		}
		document.forms[0].policyType.value = "PERSONAL";
	}
	else if ((funcCode=="M") || (funcCode=="X") || (funcCode=="D") || (funcCode=="V")|| (funcCode=="I"))
	{
		//document.getElementById("credPeriod").disabled = true;
		//document.getElementById("credAmt").disabled = true;
		document.forms[0].premiumAmt.value=parseFloat(document.forms[0].premiumAmt.value).toLocaleString();
		document.forms[0].insAmt.value=parseFloat(document.forms[0].insAmt.value).toLocaleString();
		document.forms[0].comissionAmt.value=parseFloat(document.forms[0].comissionAmt.value).toLocaleString();
		loadCoverTbl();
		
		if((funcCode=="X") || (funcCode=="D") || (funcCode=="V") || (funcCode=="I"))
		{
			document.getElementById('l6potbl').disabled=true;
			
			hideImage("insNameImg");
			hideImage("cal1");
			hideImage("cal2");
			hideImage("cal3");
			
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
	var input = "insId|"+insId+"|funcCode|"+funcCode;
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
	
		var Val2=token[5];
		var Val1=token[1];
		var count2=parseInt(token[7]);
		var table2 = document.getElementById("l6potbl").value;
		var ObjForm = document.forms[0];
		var arr_coverType = Val2.split("!");
		var arr_coverType2 = Val1.split("!");
		for(var a=1;a<=count2;a++)
		{
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
				
				cell2.innerHTML =   arr_coverType[a];
			
				if(arr_coverType2[a]=='Y')
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
			alert("Insurance Cover Type not et up ");
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

function comissionVal(obj)
{
	setTSAmount(document.getElementById("premiumAmt"));
	
	
	
	var premiumAmt = parseFloat(document.getElementById("premiumAmt").value.replace(/,/g, ''));

	if(premiumAmt > 0)
	{
		var input = "premiumAmt|" + premiumAmt + "|insName|" + document.forms[0].insName.value;
		var scrName = "climm_comissionAmt.scr";
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
			
			if(!isNaN(Val )){
				if(Number(Val)<0)
				{
					
					Val=0;
					
				}
				
			}
			else
			{
				Val = 0;
			}
			if(Val == "")
			{
				document.forms[0].comissionAmt.value = 0.00;
			}
			else
			{
				document.forms[0].comissionAmt.value = Number(Val).toLocaleString();
			}
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






//function setTSAmount(fielId)
//{
//        var amt1 = fielId.value.replace(/,/g, '');
//		
//		var regex  = /^\d+(?:\.\d{0,2})$/;		
//		if (regex.test(amt1))
//		{
//			amt1 = millionFormat(amt1);
//			if(!isNaN(amt1 )){
//					fielId.value = Number(amt1).toLocaleString();
//			}
//		}
//		else
//		{	
//			if(!isNaN(amt1 )){
//					fielId.value = Number(amt1).toLocaleString();
//			}
//			else
//			{
//				alert("Invalid amount");
//				fielId.value="0.00";
//				fielId.focus;
//			}
//			
//		}
//			
//
//		
//}

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

function fnInsCompanyList()
{       
	var strURL = "../custom/jsp/cifsegauddp003.jsp?";
	strURL += "&pageTitle="     + encodeURIComponent("Insurance Comapany List");
	strURL += "&fieldLiterals=" + encodeURIComponent("Insurance Company");
	strURL += "&hyperLinkCols=" + "1";
	strURL += "&inpNameValues=" + encodeURIComponent("assetGrpId|"+assetGrpId);
	strURL += "&scrName="       + "climm_insNames.scr";
	
	var frm = document.forms[0];
	var retVal;
	var retVal = window.showModalDialog(strURL, null,"dialogWidth:50;dialogHeight:35;modal=yes,left=150,top=40,scrollbars=yes,toolbar=no,menubar=0");
	
	frm.insName.value = retVal[0]==null||retVal[0]=="undefined"?"":retVal[0];
	//frm.cifId.value = retVal[0]==null||retVal[4]=="undefined"?"":retVal[4];
	//frm.assetGrpId.value = retVal[0]==null||retVal[3]=="undefined"?"":retVal[3];
	fnComissionPopulate();
}

function fnComissionPopulate()
{
	var insName = document.forms[0].insName.value.toUpperCase();
	var premiumAmt = parseFloat(document.forms[0].premiumAmt.value.replace(/,/g,""));
	if(cifId != "")
	{
		var input = "insName|" + insName + "|premiumAmt|" + premiumAmt;
		var scrName = "climm_comissionAmt.scr";
		var output = "";
		var retVal = appFnExecuteScript(input,output,scrName,false);
		var token = retVal.split("|");
		if(token[1]=='ERR')
		{
		alert("Insurance Company is Invalid");
		document.forms[0].insName.value = "";
		document.forms[0].comissionAmt.value = "";
		document.forms[0].comissionAmt.focus();
		return false;
		}
		else
		{
			var Val=token[1].toUpperCase();;
			if(Val == "NAN")
			{
				document.forms[0].comissionAmt.value = 0.00;
			}
			else
			{
				document.forms[0].comissionAmt.value = Number(Val).toLocaleString();
			}
			//document.forms[0].premiumAmt.value = Number(premiumAmt).toLocaleString();
			document.getElementById("comissionAmt").disabled = true;
		}
	}
	else
	{
	document.forms[0].cifId.value = "";
	document.forms[0].custName.value = "";
	document.forms[0].cifId.focus();
	}
	
}


function loadPercantage(obj)
{
	setTSAmount(obj);
	if(parseFloat(obj.value.replace(/,/g,"")) >0)
	{
		var insAmt = millionFormat(obj.value.replace(/,/g,""));
		
		var input = "cifId|" + cifId + "|insAmt|" + insAmt + "|assetGrpId|" + assetGrpId + "|assetId|" + assetId;
		var scrName = "climm_calcPercentage.scr";
		var output = "";
		var retVal = appFnExecuteScript(input,output,scrName,false);
		var token = retVal.split("|");
		if(token[1]=='ERR')
		{
		alert("Insurance Amount is Invalid");
		document.forms[0].insAmt.value = "";
		document.forms[0].insPercentage.value = "";
		document.forms[0].insAmt.focus();
		return false;
		}
		else
		{
			var Val=token[1];
			
			
			if ((Val<token[5]) && (Val>token[7]))
			{
				alert("Sum Insurance Amount should be between "+token[5] +"% and " +token[7] +"%");
				document.forms[0].insAmt.value = "";
				document.forms[0].insPercentage.value = "";
				document.forms[0].insAmt.focus();
				return false;
			}
			var Val2=token[3].toUpperCase();
			if(Val2 == "NAN")
			{
				document.forms[0].insPercentage.value = "0.00%";
				document.forms[0].insAmt.value = 0.00;
			}
			else
			{
				insPercentage = parseFloat(Val).toFixed(2);
				document.forms[0].insPercentage.value = insPercentage.concat("%");
				document.forms[0].insAmt.value = token[3];
			}
			document.forms[0].insAmt.value = parseFloat(insAmt).toLocaleString();
			document.getElementById("insAmt").disabled = false;
		}
	}
	else
	{
		document.forms[0].insAmt.value = 0.00;
		document.forms[0].insPercentage.value = "0%";
		document.forms[0].insAmt.focus();
	}	
}
