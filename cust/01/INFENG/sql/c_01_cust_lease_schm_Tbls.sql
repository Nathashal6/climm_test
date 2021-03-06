DROP TABLE CUSTOM.CUST_LEASE_SCHM_PARAM;

CREATE TABLE CUSTOM.CUST_LEASE_SCHM_PARAM
(
	schm_code				VARCHAR2(5),
	schm_desc				VARCHAR2(50),
	AC_GEN					VARCHAR2(1),
	AC_SEQUENCE				VARCHAR2(10),
	PENAL_INT_RATE			NUMBER(10,2),
	PENAL_GRACE_DAYS		NUMBER(10),
	INT_TBL_CODE			VARCHAR2(10),
	UNEARNED_INC_BACID		VARCHAR2(16),
	CURR_DUES_BACID			VARCHAR2(16),
	CURR_DUES_PD_BACID		VARCHAR2(16),
	INT_RECIEVABLE_BACID	VARCHAR2(16),
	INT_RECIEVABLE_PD_BACID	VARCHAR2(16),
	INT_PNL_BACID			VARCHAR2(16),
	PENAL_PNL_BACID			VARCHAR2(16),
	REPAY_BACID				VARCHAR2(16),
	PROV_DR_BACID			VARCHAR2(16),
	PROV_CR_BACID			VARCHAR2(16),
	GL_SUB_HEAD_CODE		VARCHAR2(5),
	PD_GL_SUB_HEAD_CODE		VARCHAR2(5),
	LEASE_TYPE				VARCHAR2(10),
	entity_cre_flg  		CHAR(1),
	del_flg         		CHAR(1),  
	lchg_user_id    		VARCHAR2(15),
	lchg_time       		date,
	rcre_user_id    		VARCHAR2(15),
	rcre_time       		date
)
TABLESPACE CUSTOM_TBLS;

drop SYNONYM CUSTOM.C_LS_GSPM;
CREATE SYNONYM CUSTOM.C_LS_GSPM FOR CUSTOM.CUST_LEASE_SCHM_PARAM;
create index C_LS_GSPM_IDX_1 on CUSTOM.CUST_LEASE_SCHM_PARAM(SCHM_CODE) tablespace CUSTOM_IDX_TBLS;


GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_PARAM TO TBAADM;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_PARAM TO TBAGEN;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_PARAM TO TBAUTIL;



DROP TABLE CUSTOM.CUST_LEASE_SCHM_PARAM_MOD;

CREATE TABLE CUSTOM.CUST_LEASE_SCHM_PARAM_MOD
(
	schm_code				VARCHAR2(5),
	schm_desc				VARCHAR2(50),
	AC_GEN					VARCHAR2(1),
	AC_SEQUENCE				VARCHAR2(10),
	PENAL_INT_RATE			NUMBER(10,2),
	PENAL_GRACE_DAYS		NUMBER(10),
	INT_TBL_CODE			VARCHAR2(10),
	UNEARNED_INC_BACID		VARCHAR2(16),
	CURR_DUES_BACID			VARCHAR2(16),
	CURR_DUES_PD_BACID		VARCHAR2(16),
	INT_RECIEVABLE_BACID	VARCHAR2(16),
	INT_RECIEVABLE_PD_BACID	VARCHAR2(16),
	INT_PNL_BACID			VARCHAR2(16),
	PENAL_PNL_BACID			VARCHAR2(16),
	REPAY_BACID				VARCHAR2(16),
	PROV_DR_BACID			VARCHAR2(16),
	PROV_CR_BACID			VARCHAR2(16),
	GL_SUB_HEAD_CODE		VARCHAR2(5),
	PD_GL_SUB_HEAD_CODE		VARCHAR2(5),
	LEASE_TYPE				VARCHAR2(10),
	entity_cre_flg  		CHAR(1),
	del_flg         		CHAR(1),  
	lchg_user_id    		VARCHAR2(15),
	lchg_time       		date,
	rcre_user_id    		VARCHAR2(15),
	rcre_time       		date
)
TABLESPACE CUSTOM_TBLS;

drop SYNONYM CUSTOM.C_LS_GSPM_MOD;
CREATE SYNONYM CUSTOM.C_LS_GSPM_MOD FOR CUSTOM.CUST_LEASE_SCHM_PARAM_MOD;
create index C_LS_GSPM_MOD_IDX_1 on CUSTOM.CUST_LEASE_SCHM_PARAM_MOD(SCHM_CODE) tablespace CUSTOM_IDX_TBLS;


GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_PARAM_MOD TO TBAADM;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_PARAM_MOD TO TBAGEN;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_PARAM_MOD TO TBAUTIL;





DROP TABLE CUSTOM.CUST_LEASE_SCHM_CHRGS;

CREATE TABLE CUSTOM.CUST_LEASE_SCHM_CHRGS
(
	schm_code		VARCHAR2(5),
	CHARGE_ID		VARCHAR2(25),
	CHARGE_EVENT	VARCHAR2(1),
	del_flg         CHAR(1),  
	lchg_user_id    VARCHAR2(15),
	lchg_time       date,
	rcre_user_id    VARCHAR2(15),
	rcre_time       date
)
TABLESPACE CUSTOM_TBLS;

drop SYNONYM CUSTOM.C_LS_SCHMCHRG;
CREATE SYNONYM CUSTOM.C_LS_SCHMCHRG FOR CUSTOM.CUST_LEASE_SCHM_CHRGS;
create index C_LS_SCHMCHRG_IDX_1 on CUSTOM.CUST_LEASE_SCHM_CHRGS(SCHM_CODE,CHARGE_ID) tablespace CUSTOM_IDX_TBLS;


GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_CHRGS TO TBAADM;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_CHRGS TO TBAGEN;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_CHRGS TO TBAUTIL;




DROP TABLE CUSTOM.CUST_LEASE_SCHM_CHRGS_MOD;

CREATE TABLE CUSTOM.CUST_LEASE_SCHM_CHRGS_MOD
(
	schm_code		VARCHAR2(5),
	CHARGE_ID		VARCHAR2(25),	
	CHARGE_EVENT	VARCHAR2(1),
	del_flg         CHAR(1),  
	lchg_user_id    VARCHAR2(15),
	lchg_time       date,
	rcre_user_id    VARCHAR2(15),
	rcre_time       date
)
TABLESPACE CUSTOM_TBLS;

drop SYNONYM CUSTOM.C_LS_SCHMCHRG_MOD;
CREATE SYNONYM CUSTOM.C_LS_SCHMCHRG_MOD FOR CUSTOM.CUST_LEASE_SCHM_CHRGS_MOD;
create index C_LS_SCHMCHRG_MOD_IDX_1 on CUSTOM.CUST_LEASE_SCHM_CHRGS_MOD(SCHM_CODE,CHARGE_ID) tablespace CUSTOM_IDX_TBLS;


GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_CHRGS_MOD TO TBAADM;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_CHRGS_MOD TO TBAGEN;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_CHRGS_MOD TO TBAUTIL;



DROP TABLE CUSTOM.CUST_LEASE_SCHM_ASTCLS;

CREATE TABLE CUSTOM.CUST_LEASE_SCHM_ASTCLS
(
	schm_code			VARCHAR2(5),
	PD_DAYS				NUMBER(10),
	MAIN_CLASSIFICATION	VARCHAR2(5),
	SUB_CLASSIFICATION	VARCHAR2(5),
	PD_FLG				VARCHAR2(1),
	del_flg         	CHAR(1),  
	lchg_user_id    	VARCHAR2(15),
	lchg_time       	date,
	rcre_user_id    	VARCHAR2(15),
	rcre_time       	date
)
TABLESPACE CUSTOM_TBLS;

drop SYNONYM CUSTOM.C_LS_SCHMAST;
CREATE SYNONYM CUSTOM.C_LS_SCHMAST FOR CUSTOM.CUST_LEASE_SCHM_ASTCLS;
create index C_LS_SCHMAST_IDX_1 on CUSTOM.CUST_LEASE_SCHM_ASTCLS(SCHM_CODE) tablespace CUSTOM_IDX_TBLS;


GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_ASTCLS TO TBAADM;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_ASTCLS TO TBAGEN;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_ASTCLS TO TBAUTIL;




DROP TABLE CUSTOM.CUST_LEASE_SCHM_ASTCLS_MOD;

CREATE TABLE CUSTOM.CUST_LEASE_SCHM_ASTCLS_MOD
(
	schm_code			VARCHAR2(5),
	PD_DAYS				NUMBER(10),
	MAIN_CLASSIFICATION	VARCHAR2(5),
	SUB_CLASSIFICATION	VARCHAR2(5),
	PD_FLG				VARCHAR2(1),
	del_flg         	CHAR(1),  
	lchg_user_id    	VARCHAR2(15),
	lchg_time       	date,
	rcre_user_id    	VARCHAR2(15),
	rcre_time       	date
)
TABLESPACE CUSTOM_TBLS;

drop SYNONYM CUSTOM.C_LS_SCHMAST_MOD;
CREATE SYNONYM CUSTOM.C_LS_SCHMAST_MOD FOR CUSTOM.CUST_LEASE_SCHM_ASTCLS_MOD;
create index C_LS_SCHMAST_MOD_IDX_1 on CUSTOM.CUST_LEASE_SCHM_ASTCLS_MOD(SCHM_CODE) tablespace CUSTOM_IDX_TBLS;


GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_ASTCLS_MOD TO TBAADM;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_ASTCLS_MOD TO TBAGEN;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_ASTCLS_MOD TO TBAUTIL;






DROP TABLE CUSTOM.CUST_LEASE_SCHM_FCFT;

CREATE TABLE CUSTOM.CUST_LEASE_SCHM_FCFT
(
	schm_code		VARCHAR2(5),
	free_text_1		varchar2(50),
	free_text_2		varchar2(50),
	free_text_3		varchar2(50),
	free_text_4		varchar2(50),
	free_text_5		varchar2(50),
	free_text_6		varchar2(50),
	free_text_7		varchar2(50),
	free_text_8		varchar2(50),
	free_text_9		varchar2(50),
	free_text_10	varchar2(50),	
	del_flg         CHAR(1),  
	lchg_user_id    VARCHAR2(15),
	lchg_time       date,
	rcre_user_id    VARCHAR2(15),
	rcre_time       date
)
TABLESPACE CUSTOM_TBLS;

drop SYNONYM CUSTOM.C_LS_SCHMFCFT;
CREATE SYNONYM CUSTOM.C_LS_SCHMFCFT FOR CUSTOM.CUST_LEASE_SCHM_FCFT;
create index C_LS_SCHMFCFT_IDX_1 on CUSTOM.CUST_LEASE_SCHM_FCFT(SCHM_CODE) tablespace CUSTOM_IDX_TBLS;


GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_FCFT TO TBAADM;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_FCFT TO TBAGEN;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_FCFT TO TBAUTIL;




DROP TABLE CUSTOM.CUST_LEASE_SCHM_FCFT_MOD;

CREATE TABLE CUSTOM.CUST_LEASE_SCHM_FCFT_MOD
(
	schm_code		VARCHAR2(5),
	free_text_1		varchar2(50),
	free_text_2		varchar2(50),
	free_text_3		varchar2(50),
	free_text_4		varchar2(50),
	free_text_5		varchar2(50),
	free_text_6		varchar2(50),
	free_text_7		varchar2(50),
	free_text_8		varchar2(50),
	free_text_9		varchar2(50),
	free_text_10	varchar2(50),	
	del_flg         CHAR(1),  
	lchg_user_id    VARCHAR2(15),
	lchg_time       date,
	rcre_user_id    VARCHAR2(15),
	rcre_time       date
)
TABLESPACE CUSTOM_TBLS;

drop SYNONYM CUSTOM.C_LS_SCHMFCFT_MOD;
CREATE SYNONYM CUSTOM.C_LS_SCHMFCFT_MOD FOR CUSTOM.CUST_LEASE_SCHM_FCFT_MOD;
create index C_LS_SCHMFCFT_MOD_IDX_1 on CUSTOM.CUST_LEASE_SCHM_FCFT_MOD(SCHM_CODE) tablespace CUSTOM_IDX_TBLS;


GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_FCFT_MOD TO TBAADM;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_FCFT_MOD TO TBAGEN;
GRANT all privileges ON  CUSTOM.CUST_LEASE_SCHM_FCFT_MOD TO TBAUTIL;




DROP TABLE CUSTOM.CUST_LEASE_ADT;

CREATE TABLE CUSTOM.CUST_LEASE_ADT
(
	ref_num			VARCHAR2(20),
	audit_date		DATE,
	table_name		varchar2(100),
	table_key		varchar2(100),
	srl_num			varchar2(5),
	func_code		varchar2(1),
	modified_fields_data		varchar2(2000),
	audit_sol_id	varchar2(10),
	enterer_id		varchar2(20),
	auth_id			varchar2(20),
	auth_Date		DATE,
	auth_bod_date	DATE,
	mop_id			varchar2(20),
	rmks			varchar2(1000)
)
TABLESPACE CUSTOM_TBLS;

drop SYNONYM CUSTOM.C_LS_ADT;
CREATE SYNONYM CUSTOM.C_LS_ADT FOR CUSTOM.CUST_LEASE_ADT;
create index C_LS_ADT_IDX_1 on CUSTOM.CUST_LEASE_ADT(ref_num,audit_date,srl_num) tablespace CUSTOM_IDX_TBLS;
create index C_LS_ADT_IDX_2 on CUSTOM.CUST_LEASE_ADT(table_name,table_key) tablespace CUSTOM_IDX_TBLS;


GRANT all privileges ON  CUSTOM.CUST_LEASE_ADT TO TBAADM;
GRANT all privileges ON  CUSTOM.CUST_LEASE_ADT TO TBAGEN;
GRANT all privileges ON  CUSTOM.CUST_LEASE_ADT TO TBAUTIL;





drop sequence custom.c_ls_adt_Seq;

create sequence custom.c_ls_adt_Seq start with 1 increment by 1 maxvalue 999999999999999999 cycle nocache;
grant all privileges on custom.c_ls_adt_Seq to tbaadm, tbagen , tbautil;
