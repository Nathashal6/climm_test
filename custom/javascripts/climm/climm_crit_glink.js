function printBlock()
{
	writeCustomHeader("climm_crit");
	with (document){
	write('<table border="0" cellspacing="0" cellpadding="0" class="ctable">');
	write('<tr>');
	write('<td>');
	write('<table border="0" cellspacing="0" cellpadding="0">');
	write('<tr>');
	write('<td class="page-heading">' + jspResArr.get("FCLAO002") + '</td>');
	write('</tr>');
	write('</table>');
	write('<!-- DETAILSBLOCK-BEGIN -->');
	write('<table border="0" cellpadding="0" cellspacing="0" width="100%">');
	write('<tr>');
	write('<td valign="top">');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="tableborder">');
	write('<tr>');
	write('<td>');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="innertable">');
	write('<tr>');
	write('<td>');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="innertabletop1">');

	write('<tr>');
		write('<td class="textlabel" style="height: 28px; width: 136px">' + jspResArr.get("FCLAO003") + '</td>');
		write('<td class="textfield" style="width: 189px">');
		write('<select name="' + subGroupName + '.funcCode" id="funcCode" ' + climmProps.get("funcCode_ENABLED") + '   class="listboxfont" onblur="javascript:return climm_crit_ONBLUR1(this);" onChange="javascript:return climm_crit_ONCHANGE2(this);">');
		write('<option value="A">' + jspResArr.get("FCLAO004") + '</option>');
		write('<option value="I">' + jspResArr.get("FCLAO005") + '</option>');
		write('<option value="M">' + jspResArr.get("FCLAO006") + '</option>');
		write('<option value="X">' + jspResArr.get("FCLAO007") + '</option>');
		write('<option value="D">' + jspResArr.get("FCLAO008") + '</option>');
		write('<option value="V">' + jspResArr.get("FCLAO009") + '</option>');
		write('<option value="N">' + jspResArr.get("FCLAO010") + '</option>');
		write('</select>');
		write('</td>');
		
		write('<td class="textlabel" id="insRow">' + jspResArr.get("FCLAO011") + '</td>');
		write('<td class="textfield" id="insField">');
		write('<input hotKeyId="search1" type="text" class="textfieldfont" name="' + subGroupName + '.insId" id="insId" ' + climmProps.get("insId_ENABLED") + ' style="width: 119px" maxlength="15" onChange="javascript:return InsIdValidate(insId);">');
		write('<a href="javascript:fninsIdList();">');
		write('<img border="0" height="17" hotKeyId="search1" src="../Renderer/images/'+applangcode+'/search_icon.gif" width="16">');
		write('</a>');
		write('</td>');
	write('</tr>');
	
	write('<tr id="Row2">')
	
		 write('<td class="textlabel" style="height: 15px">' + jspResArr.get("FCLAO060") + '<script>setMandatory("Y");</script></td>');
		 write('<td class="textfield">');
		 write('<input type="text" class="textfieldfont" name="' + subGroupName + '.cifId" id="cifId" ' + climmProps.get("cifId_ENABLED") + ' style="height: 15px; width: 185px" onBlur="javascript:return cifValidate(cifId);">');
		 write('&nbsp;');
		 write('<a id="sLnk3" href="javascript:showCifId(document.forms[0].cifId,\'\',\'F\',document.forms[0].custName)">');
		 write('<img id="cifSearch" border="0" height="17" hotKeyId="search1" src="../Renderer/images/'+applangcode+'/search_icon.gif">');
		 write('</a>');
		 write('<input name="' + subGroupName + '.custName" id="custName" type="text" readonly enabled class="label">');
		 write('</td>');

		write('<td class="textlabel">' + jspResArr.get("FCLAO012") + '</td>');
		write('<td class="textfield">');
		write('<input hotKeyId="search1" type="text" class="textfieldfont" name="' + subGroupName + '.assetGrpId" id="assetGrpId" ' + climmProps.get("assetGrpId_ENABLED") + ' style="width: 119px" maxlength="25" onBlur="javascript:return fnassetGrpId(assetGrpId);">');
		write('<a href="javascript:fnassetGrpIdList();">');
		write('<img border="0" height="17" hotKeyId="search1" src="../Renderer/images/'+applangcode+'/search_icon.gif" width="16">');
		write('</a>');
		write('</td>');
		
	write('</tr>');
	
	write('<tr id="Row3">')
		write('<td class="textlabel">' + jspResArr.get("FCLAO013") + '</td>');
		write('<td class="textfield">');
		write('<input hotKeyId="search1" type="text" class="textfieldfont" name="' + subGroupName + '.assetId" id="assetId" ' + climmProps.get("assetId_ENABLED") + ' style="width: 119px" maxlength="25">');
		write('<a href="javascript:fnAssetIdList();">');
		write('<img border="0" height="17" hotKeyId="search1" src="../Renderer/images/'+applangcode+'/search_icon.gif" width="16">');
		write('</a>');
		write('</td>');
		
		write('<td class="textlabel" style="height: 28px; width: 136px">' + jspResArr.get("FCLAO014") + '</td>');
		write('<td class="textfield" style="width: 189px">');
		write('<select name="' + subGroupName + '.insProvider" id="insProvider" ' + climmProps.get("insProvider_ENABLED") + '   class="listboxfont" onblur="javascript:return climm_crit_ONBLUR1(this);" onChange="javascript:return climm_crit_ONCHANGE2(this);">');
		write('<option value="BY SLFL">' + jspResArr.get("FCLAO050") + '</option>');
		write('<option value="SLFL ON CREDIT">' + jspResArr.get("FCLAO051") + '</option>');
		write('<option value="DIRECT BY APPLICANT ON CREDIT">' + jspResArr.get("FCLAO052") + '</option>');
		write('<option value="EXISTING SLF">' + jspResArr.get("FCLAO053") + '</option>');
		write('<option value="DIRECT INSUARANCE PAID">' + jspResArr.get("FCLAO054") + '</option>');
		write('<option value="FREE INSUARANCE GIVEN BY SALE">' + jspResArr.get("FCLAO055") + '</option>');
		write('</select>');
		write('</td>');
		
		write('<td class="columnwidth" style="width: 47px"> </td>');
		write('<td class="textlabel" style="width: 123px"> </td>');
		write('<td class="textfield">   </td>');
	write('</tr>');
	
	write('</table>');
	write('</td>');
	write('</tr>');
	write('</table>');
	write('</td>');
	write('</tr>');
	write('</table>');
	write('</td>');
	write('</tr>');
	write('</table>');
	write('<!-- DETAILSBLOCK-END -->');
	write('</td>');
	write('</tr>');
	write('</table>');
	} //End with()
} //End function

function printFooterBlock()
{
	with (document) {
	if ((sReferralMode == 'I')||(sReferralMode == 'S')){
	write('<div align="left" class="ctable">');
	if (sReferralMode == 'S'){
	write('<input type="button" class="Button" id="Submit" value="'+jspResArr.get("FCLAO016")+ '" onClick="javascript:return doRefSubmit(this);" hotKeyId="Submit" >');
	}
	writeRefFooter();
	write('<input type="button" class="Button" id="_BackRef_" value="'+jspResArr.get("FCLAO017")+ '" onClick="javascript:return doSubmit(this.id);" hotKeyId="Cancel" >');
	write('</div>');
	}else{
	write('<div class="ctable">');
	write('<input id="Accept" name="Go" type="button" class="button"	onClick="javascript:return climm_crit_ONCLICK4(this,this);"" value="' + jspResArr.get("FCLAO018") + '" hotKeyId="Go">');
	write('<input id="Clear" name="Cancel" type="button" class="button" value="' + jspResArr.get("FCLAO017") + '"	onClick="javascript:return climm_crit_ONCLICK5(this);"">');
	writeFooter();
	write('</div>');
	}
	} //End with()
}//End function

function fnOnLoad()
{
	//alert("inside onload1");
	var ObjForm = document.forms[0];

	pre_ONLOAD('climm_crit',this);

	var funcName = "this."+"locfnOnLoad";
	if(eval(funcName) != undefined){
		eval(funcName).call(this);
	}

	//fnPopulateControlValues();

	fnAssignDateOnLoad(ObjForm);
	
	fnPopUpExceptionWindow(ObjForm.actionCode);
	if((typeof(WF_IN_PROGRESS) != "undefined") && (WF_IN_PROGRESS == "PEAS")){
		checkCustErrExecNextStep(Message);
	}

	post_ONLOAD('climm_crit',this);
}

function fnCheckMandatoryFields()
{
	var ObjForm = document.forms[0];

	return true;
}

//function fnPopulateControlValues() 
//{
//	var ObjForm = document.forms[0];
//
//	ObjForm.funcCode.value = funcCode;
//}

function climm_crit_ONBLUR1(obj)
{
	var retVal = "";
	if (preEventCall('climm_crit',obj,'ONBLUR') == false) { 
		return false;
	}
	if ((retVal = fnHandleModRow()) == false) {
		return false;
	}
	if (postEventCall('climm_crit',obj,'ONBLUR') == false) { 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
}

function climm_crit_ONCHANGE2(obj)
{
	var retVal = "";
	if (preEventCall('climm_crit',obj,'ONCHANGE') == false) { 
		return false;
	}
	if ((retVal = fnChangeFuncCode()) == false) {
		return false;
	}
	if (postEventCall('climm_crit',obj,'ONCHANGE') == false) { 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
}

function climm_crit_ONCLICK4(obj,p1)
{
	var retVal = "";
	if (preEventCall('climm_crit',obj,'ONCLICK') == false) { 
		return false;
	}
	if ((retVal =  fnValAndSubmit(p1)) == false) {
		return false;
	}
	if (postEventCall('climm_crit',obj,'ONCLICK') == false) { 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
}

function climm_crit_ONCLICK5(obj)
{
	var retVal = "";
	if (preEventCall('climm_crit',obj,'ONCLICK') == false) { 
		return false;
	}
	if ((retVal =  fnClearFields()) == false) {
		return false;
	}
	if (postEventCall('climm_crit',obj,'ONCLICK') == false) { 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
}

