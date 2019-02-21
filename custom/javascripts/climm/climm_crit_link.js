<!--	This is getting executing on click of submit and validate button -->
function fnValidateData() {
		if (!fnCheckMandatoryFields())
		{
			return false;
		}
		return true;
}

function fnCheckMandatoryFields()
{
	
		var ObjForm = document.forms[0];

		if(ObjForm.assetGrpId.value == "" )
		{
			alert("Asset Group Id is mandatory");		
			document.forms[0].assetGrpId.focus();
			return false;
		}
		
		if(ObjForm.assetId.value == "" )
		{
			alert("Asset Id is mandatory");
			document.forms[0].assetId.focus();
			return false;
		}

		if(ObjForm.cifId.value == "" )
		{
			alert("CIF Id is mandatory");
			document.forms[0].cifId.focus();
			return false;
		}
		
	return true;
}




<!-- This function is added for formatting a particular MRH Row -->

function formatRowValue(Obj, colNumber) {

      return Obj;

       }


<!-- This function is added for formatting a particular MRH Row -->

function fnValidateForm(obj){
	objForm = document.forms[0];

	return true;

}

function climm_crit_post_ONLOAD()
{	
	alert("test git 123");
	var ObjForm = document.forms[0];
	document.forms[0].funcCode.value = "A";
	fnChangeFuncCode();

}

function fnChangeFuncCode(){	
	var funcCode = document.forms[0].funcCode.value;
	if(funcCode == "A"){
		document.forms[0].insId.disabled=true;
		hideImage("insRow");
		hideImage("insField");
		showImage("Row2");
		showImage("Row3");
		
	}
	else{
		document.forms[0].insId.disabled=false;
		showImage("insRow");
		showImage("insField");
		hideImage("Row2");
		hideImage("Row3");
	}
	
}	


function fninsIdList(){
	if((document.forms[0].funcCode.value!="D") && (document.forms[0].funcCode.value!="N"))
	{
	var strURL = "../custom/jsp/cifsegauddp003.jsp?";
	strURL += "&pageTitle="     + encodeURIComponent("Insuarance Id List");
	strURL += "&fieldLiterals=" + encodeURIComponent("Insuarance Id|Asset Group Id|Asset ID|CIF Id|Insurance Provided By");
	strURL += "&hyperLinkCols=" + "1";
	strURL += "&inpNameValues=" + encodeURIComponent("insId|"+document.forms[0].insId.value+"|funcCode|"+document.forms[0].funcCode.value);
	strURL += "&scrName="       + "climm_insIdList.scr";
	
	var frm = document.forms[0];
	var retVal;
	var retVal = window.showModalDialog(strURL, null,"dialogWidth:50;dialogHeight:35;modal=yes,left=150,top=40,scrollbars=yes,toolbar=no,menubar=0");
	frm.insId.value = retVal[0]==null||retVal[0]=="undefined"?"":retVal[0];	
	frm.assetId.value = retVal[0]==null||retVal[0]=="undefined"?"":retVal[2];
	frm.assetGrpId.value = retVal[2]==null||retVal[2]=="undefined"?"":retVal[1];	
	frm.cifId.value = retVal[2]==null||retVal[2]=="undefined"?"":retVal[3];	
	frm.insProvider.value = retVal[2]==null||retVal[2]=="undefined"?"":retVal[4];	
	}
	else
	{
	var strURL = "../custom/jsp/cifsegauddp003.jsp?";
	strURL += "&pageTitle="     + encodeURIComponent("Insuarance Id List");
	strURL += "&fieldLiterals=" + encodeURIComponent("Insuarance Id|Asset Group Id|Asset ID|CIF Id|Insurance Provided By");
	strURL += "&hyperLinkCols=" + "1";
	strURL += "&inpNameValues=" + encodeURIComponent("insId|"+document.forms[0].insId.value+"|funcCode|"+document.forms[0].funcCode.value);
	strURL += "&scrName="       + "climm_insIdList_Del.scr";
	
	var frm = document.forms[0];
	var retVal;
	var retVal = window.showModalDialog(strURL, null,"dialogWidth:50;dialogHeight:35;modal=yes,left=150,top=40,scrollbars=yes,toolbar=no,menubar=0");
	frm.insId.value = retVal[0]==null||retVal[0]=="undefined"?"":retVal[0];	
	frm.assetId.value = retVal[0]==null||retVal[0]=="undefined"?"":retVal[2];
	frm.assetGrpId.value = retVal[2]==null||retVal[2]=="undefined"?"":retVal[1];	
	frm.cifId.value = retVal[2]==null||retVal[2]=="undefined"?"":retVal[3];	
	frm.insProvider.value = retVal[2]==null||retVal[2]=="undefined"?"":retVal[4];	
		
	}
	
}
function fnHandleModRow()
{
	var functionCode = document.forms[0].funcCode.value;																		
}

function InsIdValidate(obj)
{
	if(document.forms[0].insId.value != "")
	{
		var inputNameValues     = "insId|"+obj.value;
		var outputNames         = ""
		var scrName             = "climm_inId.scr"
		var retVal              = appFnExecuteScript(inputNameValues,outputNames,scrName,false);
		var ret         = retVal.split("|");
		if(ret[1] != "ERR")
		{
			document.forms[0].cifId.value = ret[1];
			document.forms[0].assetGrpId.value = ret[3];
			document.forms[0].assetId.value = ret[5];
			document.forms[0].insProvider.value = ret[7];
			return true;
		}
		else
		{
			alert("Insuarance Id invalid");
			document.forms[0].insId.value = "";
			document.forms[0].insId.focus();
			return false;
		}
	}
	else
	{
		document.forms[0].cifId.value = "";
		document.forms[0].assetGrpId.value = "";
		document.forms[0].assetId.value = ""
		document.forms[0].insProvider.value = "";
		return false;
		
	}
}

function fnassetGrpIdList()
{       
	var strURL = "../custom/jsp/cifsegauddp003.jsp?";
	strURL += "&pageTitle="     + encodeURIComponent("Asset Group Id List");
	strURL += "&fieldLiterals=" + encodeURIComponent("Asset Group Id|Asset Creation Date|CIF Id");
	strURL += "&hyperLinkCols=" + "1";
	strURL += "&inpNameValues=" + encodeURIComponent("cifId|"+document.forms[0].cifId.value);
	strURL += "&scrName="       + "AssetGrpId.scr";
	
	var frm = document.forms[0];
	var retVal;
	var retVal = window.showModalDialog(strURL, null,"dialogWidth:50;dialogHeight:35;modal=yes,left=150,top=40,scrollbars=yes,toolbar=no,menubar=0");
	frm.assetGrpId.value = retVal[0]==null||retVal[0]=="undefined"?"":retVal[0];	
	frm.cifId.value = retVal[2]==null||retVal[2]=="undefined"?"":retVal[2];	
	frm.assetId.value = retVal[3]==null||retVal[3]=="undefined"?"":retVal[3];	
	//var  count = retVal[2]==null||retVal[2]=="undefined"?"":retVal[2];	
}

function fnAssetIdList()
{       
	var strURL = "../custom/jsp/cifsegauddp003.jsp?";
	strURL += "&pageTitle="     + encodeURIComponent("Asset Id List");
	strURL += "&fieldLiterals=" + encodeURIComponent("Asset Id|Asset Code|Date of Reg|Asset Group Id|CIF Id");
	strURL += "&hyperLinkCols=" + "1";
	strURL += "&inpNameValues=" + encodeURIComponent("assetGrpId|"+document.forms[0].assetGrpId.value);
	strURL += "&scrName="       + "AssetId.scr";
	
	var frm = document.forms[0];
	var retVal;
	var retVal = window.showModalDialog(strURL, null,"dialogWidth:50;dialogHeight:35;modal=yes,left=150,top=40,scrollbars=yes,toolbar=no,menubar=0");
	
	frm.assetId.value = retVal[0]==null||retVal[0]=="undefined"?"":retVal[0];
	//frm.cifId.value = retVal[0]==null||retVal[4]=="undefined"?"":retVal[4];
	//frm.assetGrpId.value = retVal[0]==null||retVal[3]=="undefined"?"":retVal[3];
	
}

//function fnassetGrpId(obj)
//{
//	if(obj.value != "")
//	{
//		var inputNameValues     = "assetGrpId|"+obj.value;
//		var outputNames         = ""
//		var scrName             = "climm_assetGrpId.scr"
//		var retVal              = appFnExecuteScript(inputNameValues,outputNames,scrName,false);
//		var ret         = retVal.split("|");
//		if(ret[1] != "ERR")
//		{
//			document.forms[0].cifId.value = ret[2];
//			//document.forms[0].assetId.value = ret[3];
//			return true;
//		}
//		else
//		{
//			alert("Asset Group Id is invalid");
//			document.forms[0].assetGrpId.value = "";
//			document.forms[0].assetGrpId.focus();
//			return false;
//		}
//	}
//	else
//	{
//		document.forms[0].cifId.value = "";
//		document.forms[0].assetGrpId.value = "";
//		document.forms[0].assetId.value = ""
//		document.forms[0].insProvider.value = "";
//		return false;
//		
//	}
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

