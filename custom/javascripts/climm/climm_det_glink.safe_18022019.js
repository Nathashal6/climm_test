function printBlock()
{	
	writeCustomHeader("climm_det");
	with (document)
	{
		write('<input type="hidden" class="textfieldfont" name="hidglSubHeadCode">');
		write('<input type="hidden" class="textfieldfont" name="hidsolId">');
		write('<input type="hidden" class="textfieldfont" name="hidcrncyCode">');
		write('<input type="hidden" id="startDate" fdt="fdate" mneb1="N" vFldId="startDate_ui" name="' + subGroupName + '.startDate">');
	    write('<input type="hidden" id="endDate" fdt="fdate" mneb1="N" vFldId="endDate_ui" name="' + subGroupName + '.endDate">');
		write('<input type="hidden" id="expiryDate" fdt="fdate" mneb1="N" vFldId="expiryDate_ui" name="' + subGroupName + '.expiryDate">');
		write('<table border="0" cellspacing="0" cellpadding="0" class="ctable">');
		write('<tr>');
		write('<td>');
		write('<table border="0" cellspacing="0" cellpadding="0">');
		write('<tr>');
		
		write('<td class="page-heading">' + jspResArr.get("FCLAO021") + '</td>');
		write('</tr>');
		write('</table>');
		write('<table border="0" cellpadding="0" cellspacing="0" width="100%">');
		write('<tr>');
		
		write('<td class="textlabel">' + jspResArr.get("FCLAO022") + '</td>');
		write('<td class="textfielddisplaylabel"> ');
		write('<label id="compField">' + funcCode + '</label>');
		write('</td>');
		write('<td class="columnwidth">&nbsp; </td>');
		write('<td class="textlabel">' + jspResArr.get("FCLAO023") + '</td>');
		write('<td class="textfielddisplaylabel"> ');
		write('<label id="compField">' + insId + '</label>');
		write('</td>');
		write('</tr>');
		
		write('<tr>');
		write('<td class="textlabel">' + jspResArr.get("FCLAO041") + '</td>');
		write('<td class="textfielddisplaylabel"> ');
		write('<label id="compField">' + cifId + '</label>');
		write('</td>');
		write('<td class="columnwidth">&nbsp; </td>');
		write('<td class="textlabel" id="operDate_label1">' + jspResArr.get("FCLAO024") + '</td>');
		write('<td class="textfielddisplaylabel"> ');
		write('<label id="compField">' + assetGrpId + '</label>');
		write('</td>');
		write('</tr>');
		
		write('<tr>');
		write('<td class="textlabel">' + jspResArr.get("FCLAO025") + '</td>');
		write('<td class="textfielddisplaylabel"> ');
		write('<label id="compField">' + assetId + '</label>');
		write('</td>');
		write('<td class="columnwidth">&nbsp; </td>');
		write('<td class="textlabel" id="refNumber_label1">' + jspResArr.get("FCLAO026") + '</td>');
		write('<td class="textfielddisplaylabel"> ');
		write('<label id="compField">' + insProvider + '</label>');
		write('</td>');
		write('</tr>');
		
		write('<tr>');
		write('<td class="textlabel">' + jspResArr.get("FCLAO030") + '</td>');
		write('<td class="textfielddisplaylabel"> ');
		write('<label id="compField">' + assetValue + '</label>');
		write('</td>');
		write('<td class="columnwidth">&nbsp; </td>');
		write('<td class="columnwidth">&nbsp; </td>');
		write('</tr>');
		
		write('<!-- DETAILSBLOCK-BEGIN -->');
		write('<table border="0" cellpadding="0" cellspacing="0" width="100%">');
		write('<tr>');
		write('<td valign="top">');
		write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="table">');
		write('<tr>');
		write('<td>');
		write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="innertable">');
		write('<tr>');
		write('<td>');
		write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="innertabletop1">');
		
		write('<tr>');
			write('<td class="textlabel">' + jspResArr.get("FCLAO027") + '');
			write('<span style="color :red">*</span>');
			write('</td>');
			write('<td class="textfield">');	
			write('<input type="text" class="textfieldfont" name="' + subGroupName + '.insPolicyNo" id="insPolicyNo"  fdt="String" ' + climmProps.get("insPolicyNo_ENABLED") + ' style="width: 166px; text-align: right;" maxlength="25">');
			write('</td>');
			
			write('<td class="textlabel">' + jspResArr.get("FCLAO028") + '</td>');
		    write('<td class="textfield">');
		    write('<input hotKeyId="search1" type="text" class="textfieldfont" name="' + subGroupName + '.insName" id="insName" ' + climmProps.get("insName_ENABLED") + ' style="width: 119px" maxlength="10">');
		    write('<a href="javascript:fninsNameList();">');
		    write('<img border="0" height="17" hotKeyId="search1" src="../Renderer/images/'+applangcode+'/search_icon.gif" width="16">');
		    write('</a>');
		    write('</td>');
		write('</tr>');
		
		write('<tr>');
			write('<td class="textlabel">' + jspResArr.get("FCLAO029") + '');
			write('<span style="color :red">*</span>');
			write('</td>');
			write('<td class="textfield">');	
			write('<input type="text" class="textfieldfont" name="' + subGroupName + '.policyType" id="policyType"  fdt="String" ' + climmProps.get("policyType_ENABLED") + ' style="width: 166px; text-align: right;" maxlength="12">');
			write('</td>');
			write('<td class="columnwidth" style="width: 47px"> </td>');
			write('<td class="textlabel" style="width: 123px"> </td>');
			write('<td class="textfield">   </td>');
		write('</tr>');
		
		write('<tr>');
			write('<td class="textlabel" style="height: 15px">' + jspResArr.get("FCLAO031") + '</td>');
			write('<td class="textfield">');
			write('<input  hotKeyId="calender1"  type="text" class="textfieldfont" fdt="uidate"  mnebl="false" onBlur="javascript:return climm_det_ONBLUR2(this,this,this);" name="' + subGroupName + '.startDate_ui" id="startDate_ui"  style="width: 130px">');
			write('<a  href="javascript:openDate(document.forms[0].startDate_ui,BODDate)"   id="sLnk2"><img align="absmiddle" alt="Date picker" border="0" height="19"  hotKeyId="calender1" src="../Renderer/images/'+applangcode+'/calender.gif" width="24" class="img" >');
			write('</a>');
		    write('</td>');
			
			write('<td class="textlabel" style="height: 15px">' + jspResArr.get("FCLAO032") + '</td>');
			write('<td class="textfield">');
			write('<input  hotKeyId="calender2"  type="text" class="textfieldfont" fdt="uidate"  mnebl="false" onBlur="javascript:return climm_det_ONBLUR2(this,this,this);" name="' + subGroupName + '.endDate_ui" id="endDate_ui"  style="width: 130px">');
			write('<a  href="javascript:openDate(document.forms[0].endDate_ui,BODDate)"   id="sLnk3"><img align="absmiddle" alt="Date picker" border="0" height="19"  hotKeyId="calender2" src="../Renderer/images/'+applangcode+'/calender.gif" width="24" class="img" >');
			write('</a>');
			write('</td>');
		write('</tr>');
		
		write('<tr>');
			write('<td class="textlabel">' + jspResArr.get("FCLAO033") + '');
			write('<span style="color :red">*</span>');
			write('</td>');
			write('<td class="textfield">');	
			write('<input type="text" class="textfieldfont" name="' + subGroupName + '.noteNo" id="noteNo"  fdt="String" ' + climmProps.get("noteNo_ENABLED") + ' style="width: 166px; text-align: right;" maxlength="12" onBlur="javascript:return calcExpiryDate(this);">');
			write('</td>');
			
			write('<td class="textlabel" style="height: 15px">' + jspResArr.get("FCLAO034") + '</td>');
			write('<td class="textfield">');
			write('<input  hotKeyId="calender3"  type="text" class="textfieldfont" fdt="uidate"  mnebl="false" onBlur="javascript:return climm_det_ONBLUR2(this,this,this);" name="' + subGroupName + '.expiryDate_ui" id="expiryDate_ui"  style="width: 130px">');
			write('<a  href="javascript:openDate(document.forms[0].expiryDate_ui,BODDate)"   id="sLnk4"><img align="absmiddle" alt="Date picker" border="0" height="19"  hotKeyId="calender3" src="../Renderer/images/'+applangcode+'/calender.gif" width="24" class="img" >');
			write('</a>');
			write('</td>');
		write('</tr>');
			
		write('<tr>');
			write('<td class="textlabel">' + jspResArr.get("FCLAO035") + '');
			write('<span style="color :red">*</span>');
			write('</td>');
			write('<td class="textfield">');	
			write('<input type="text" class="textfieldfont" name="' + subGroupName + '.premiumAmt" id="premiumAmt"  fdt="String" ' + climmProps.get("premiumAmt_ENABLED") + ' style="width: 166px; text-align: right;" maxlength="12" onBlur="javascript:return comissionVal(premiumAmt);">');
			write('</td>');
			write('<td class="textlabel">' + jspResArr.get("FCLAO039") + '');
			write('<span style="color :red">*</span>');
			write('</td>');
			write('<td class="textfield">');	
			write('<input type="text" class="textfieldfont" name="' + subGroupName + '.insAmt" id="insAmt"  fdt="String" ' + climmProps.get("insAmt_ENABLED") + ' style="width: 166px; text-align: right;" maxlength="12" onBlur="javascript:return fnValAmt(insAmt);">');
			write('</td>');
		write('</tr>');
		
		//write('</table>');
		//write('</td>');
		//write('</tr>');
		//write('</table>');
		//write('</td>');
		//write('</tr>');
		//write('</table>');
		//write('</td>');
		//write('</tr>');
		//write('</table>');
		//write('<!-- DETAILSBLOCK-END -->');
		//write('<!-- DETAILSBLOCK-BEGIN -->');
		//write('<table border="0" cellpadding="0" cellspacing="0" width="100%">');
		//write('<tr>');
		//write('<td valign="top">');
		//write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="table">');
		//write('<tr>');
		//write('<td>');
		//write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="innertable">');
		//write('<tr>');
		//write('<td>');
		//write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="innertabletop1">');
		write('<tr>');
			write('<td class="textlabel">' + jspResArr.get("FCLAO036") + '');
			write('<span style="color :red">*</span>');
			write('</td>');
			write('<td class="textfield">');	
			write('<input type="text" class="textfieldfont" name="' + subGroupName + '.credAmt" id="credAmt"  fdt="String" ' + climmProps.get("credAmt_ENABLED") + ' style="width: 166px; text-align: right;" maxlength="12" onBlur="javascript:return fnValAmt(credAmt);">');
			write('</td>');
			
			write('<td class="textlabel">' + jspResArr.get("FCLAO037") + '');
			write('<span style="color :red">*</span>');
			write('</td>');
			write('<td class="textfield">');	
			write('<input type="text" class="textfieldfont" name="' + subGroupName + '.capAmt" id="capAmt"  fdt="String" ' + climmProps.get("capAmt_ENABLED") + ' style="width: 166px; text-align: right;" maxlength="12" onBlur="javascript:return fnValAmt(capAmt);">');
			write('</td>');
		write('</tr>');
			
		write('<tr>');
			write('<td class="textlabel">' + jspResArr.get("FCLAO038") + '');
			write('<span style="color :red">*</span>');
			write('</td>');
			write('<td class="textfield">');	
			write('<input type="text" class="textfieldfont" name="' + subGroupName + '.credPeriod" id="credPeriod"  fdt="String" ' + climmProps.get("credPeriod_ENABLED") + ' style="width: 166px; text-align: right;" maxlength="12" >');
			write('</td>');
			write('<td class="textlabel">' + jspResArr.get("FCLAO040") + '</td>');
		    write('<td class="textfield">');	
			write('<input type="text" class="textfieldfont" name="' + subGroupName + '.comissionAmt" id="comissionAmt"  fdt="String" ' + climmProps.get("comissionAmt_ENABLED") + ' style="width: 166px; text-align: right;" maxlength="12" onBlur="javascript:return fnValAmt(comissionAmt);">');
			write('</td>');
		//write('</td>');
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
		write('</table>');
		write('<br />');
		write('</td>');
		write('</tr>');
		write('</table>');
	
	} //End with()
} //End

function printFooterBlock()
{
	with (document) 
	{
		if ((sReferralMode == 'I')||(sReferralMode == 'S'))
		{
			write('<div align="left" class="ctable">');
			if (sReferralMode == 'S')
			{
				write('<input type="button" class="Button" id="Submit" value="'+jspResArr.get("FCDET002")+ '" onClick="javascript:return doRefSubmit(this);" hotKeyId="Submit" >');
			}
			writeRefFooter();
			write('<input type="button" class="Button" id="_BackRef_" value="'+jspResArr.get("FCDET004")+ '" onClick="javascript:return doSubmit(this.id);" hotKeyId="Cancel" >');
			write('</div>');
		}
		else
		{
			if(funcCode !='I')
			{
				write('<div class="ctable">');
				write('<input id="Submit" name="Submit" type="button" class="button" onClick="javascript:return climm_det_ONCLICK1(this,this);"" value="' + jspResArr.get("FCDET002") + '" hotKeyId="Submit">');
				write('<input id="Submit" name="Submit" type="button" class="button" onClick="javascript:return climm_det_ONCLICK1(this,this);"" value="' + jspResArr.get("FCDET003") + '" hotKeyId="Validate">');
				write('<input id="Cancel" name="Cancel" type="button" class="button" value="' + jspResArr.get("FCDET004") + '"	onClick="javascript:return climm_det_ONCLICK2(this,this.id);"" hotKeyId="Cancel">');
			}
			else
			{
				write('<div class="ctable">');
				write('<input class="button" type="button" id="Back" value="'+jspResArr.get("FCDET014")+ '" onClick="javascript:return doSubmit(this.id)" hotKeyId="Ok">');
			}
			writeFooter();
			write('</div>');
		}
	} //End with()
}//End function

function fnOnLoad()
{
	var ObjForm = document.forms[0];

	pre_ONLOAD('climm_det',this);

	var funcName = "this."+"locfnOnLoad";
	
	if(eval(funcName) != undefined)
	{
		eval(funcName).call(this);
	}
	
	fnPopulateControlValues();
	fnAssignDateOnLoad(ObjForm);

	if(funcCode =='V' || funcCode =='I' || funcCode =='D' || funcCode =='U' ||  funcCode =='X' || sReferralMode =='I' || sReferralMode =='S')
	{
		fnDisableFormDataControls('V',ObjForm,0);
	}
	
	fnPopUpExceptionWindow(ObjForm.actionCode);
	
	if((typeof(WF_IN_PROGRESS) != "undefined") && (WF_IN_PROGRESS == "PEAS"))
	{
		checkCustErrExecNextStep(Message);
	}
	
	post_ONLOAD('climm_det',this);
}

function fnPopulateControlValues() 
{
	//if(funcCode != 'A')
	//{
		var ObjForm = document.forms[0];
		ObjForm.insPolicyNo.value=insPolicyNo;
		ObjForm.insName.value=insName;
		ObjForm.policyType.value=policyType;
		ObjForm.startDate.value=startDate;
		ObjForm.endDate.value=endDate;
		ObjForm.noteNo.value=noteNo;
		ObjForm.expiryDate.value=expiryDate;
		ObjForm.premiumAmt.value=premiumAmt;
		ObjForm.credAmt.value=credAmt;
		ObjForm.capAmt.value=capAmt;
		ObjForm.credPeriod.value=credPeriod;
		ObjForm.insAmt.value=insAmt;
		ObjForm.comissionAmt.value=comissionAmt;
	//}
}


function climm_det_ONCLICK1(obj,p1)
{
	var retVal = "";
	if (preEventCall('climm_det',obj,'ONCLICK') == false) 
	{ 
		return false;
	}
	if ((retVal =  fnValAndSubmit(p1)) == false) 
	{
		return false;
	}
	if (postEventCall('climm_det',obj,'ONCLICK') == false) 
	{ 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
}

function climm_det_ONCLICK2(obj,p1)
{
	var retVal = "";
	if (preEventCall('climm_det',obj,'ONCLICK') == false) 
	{ 
		return false;
	}
	if ((retVal =  doSubmit(p1)) == false)
	{
		return false;
	}
	if (postEventCall('climm_det',obj,'ONCLICK') == false)
	{ 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
}

function climm_det_ONBLUR2(obj,p1,p2)
{
	var retVal = "";
	if (preEventCall('climm_det',obj,'ONBLUR') == false) { 
		return false;
	}
	if ((retVal = onBlurFormatDate(p1)) == false) {
		return false;
	}
	if ((retVal = fnAssignDateOnEnter(p2)) == false) {
		return false;
	}
	if (postEventCall('climm_det',obj,'ONBLUR') == false) { 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
	
}
