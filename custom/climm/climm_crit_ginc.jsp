<%--
//Generated by Customization WB Generator
//Do not edit this file directly.
//Instead, modify the properties in the tool and regenerate.
--%>

<%@ page import="applcommon.ParseValue" %>
<%@ page import="com.infy.bbu.jsputil.*"%>
<%@ page import="java.util.Vector"%>
<%@ page import="FABCommon.SecurityInfo70"%>
<%@ taglib uri="taglib.tld" prefix="arjsp" %>
<arjsp:init groupName="Customize" isEntryPoint="false" />

<%
	String sProfileId = ProfilesManager.getProfileInSession(session);
	String sSubGrpName = (String)ARJspCurr.getInput("subGroupName","");
	String sGrpName = ARJspCurr.getCurrentGroup();
	String pageName = (String)ARJspCurr.getInput("jspName","");
	String sPopUpExceptionWindow = (String)ARJspCurr.getInput(sGrpName+".PopUpExceptionWindow" ,"false");
	String sReferralMode = (String)ARJspCurr.getInput("refSubMode" ,"");
	ARJspCurr.setInput(sGrpName+".PopUpExceptionWindow","false");
	SecurityInfo70 securityInfo = (SecurityInfo70)session.getAttribute("FinUserInfo");

%>
<script>

	var sPopUpExceptionWindow = '<%=ParseValue.checkString(sPopUpExceptionWindow)%>';
	var sReferralMode = '<%=ParseValue.checkString(sReferralMode)%>';
	var subGroupName = '<%=ParseValue.checkString(ARJspCurr.getInput("subGroupName",""))%>';
	var BODDate= '<%= ParseValue.checkString((securityInfo.bodDate).substring(0,10))%>';
	var funcCode = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".funcCode",""))%>';
	var assetId = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".assetId",""))%>';
	var assetGrpId = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".assetGrpId",""))%>';
	var insProvider = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".insProvider",""))%>';
	var insId = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".insId",""))%>';
	var cifId = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".cifId",""))%>';
	var srchCriteria = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".srchCriteria",""))%>';
	var searchValue = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".searchValue",""))%>';
	var term = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".term",""))%>';

</script>

<script language="javascript" src="../Renderer/javascripts/lists/<%=VRPKeys.getFile("showCustId.js",sProfileId)%>" > </script>


<script language="JavaScript">
	printBlock();
	printFooterBlock();
</script>

