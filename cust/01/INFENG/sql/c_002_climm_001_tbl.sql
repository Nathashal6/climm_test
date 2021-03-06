DROP TABLE CUSTOM.CUST_INS_MASTER_MAINT;


CREATE TABLE CUSTOM.CUST_INS_MASTER_MAINT
(
	ins_id	 			varchar2(20),
	cif_id 				varchar2(20),
	asset_grp_id	 	varchar2(20),
	asset_id	 		varchar2(20),
	ins_done_by	 		varchar2(30),
	ins_policy_no	 	varchar2(50),
	ins_company	 		varchar2(100),
	policy_type	 		varchar2(20),
	policy_start_date	Date        ,
	policy_end_date	 	Date        ,
	cover_note_no	 	varchar2(30),
	cover_note_exp_date	Date        ,
	premium_amt	 	    Number(17,2),
	ins_amt	 	        Number(17,2),
	comission_amt	 	Number(17,2),
	ins_cr_amt	 	    Number(17,2),
	capitalized_amt	 	Number(17,2),
	cr_period		    Int         ,
	entity_cre_flg	    char(1)     ,
	del_flg		        char(1)     ,
	version_no		    int         ,
	status		        char(1)     ,
	lchg_user_id		varchar2(20),
	lchg_time		    date        ,
	rcre_user_id		varchar2(20),
	rcre_time		    date,
	srl_num 			varchar2(5)
)
TABLESPACE CUSTOM_TBLS;


drop SYNONYM CUSTOM.CIMM_TBL;
CREATE SYNONYM CUSTOM.CIMM_TBL FOR CUSTOM.CUST_INS_MASTER_MAINT;
GRANT insert, update, delete, select ON  CUSTOM.CIMM_TBL TO TBAADM;
GRANT insert, update, delete, select ON  CUSTOM.CIMM_TBL TO TBAGEN;
GRANT insert, update, delete, select ON  CUSTOM.CIMM_TBL TO TBAUTIL;

create index c_cimm_tbl_idx1 on custom.CUST_INS_MASTER_MAINT(ins_id);
create index c_cimm_tbl_idx2 on custom.CUST_INS_MASTER_MAINT(asset_grp_id,asset_id);

DROP TABLE CUSTOM.CUST_INS_MASTER_MAINT_MOD;


CREATE TABLE CUSTOM.CUST_INS_MASTER_MAINT_MOD
(
	ins_id	 			varchar2(20),
	cif_id 				varchar2(20),
	asset_grp_id	 	varchar2(20),
	asset_id	 		varchar2(20),
	ins_done_by	 		varchar2(30),
	ins_policy_no	 	varchar2(50),
	ins_company	 		varchar2(100),
	policy_type	 		varchar2(20),
	policy_start_date	Date        ,
	policy_end_date	 	Date        ,
	cover_note_no	 	varchar2(30),
	cover_note_exp_date	Date        ,
	premium_amt	 	    Number(17,2),
	ins_amt	 	        Number(17,2),
	comission_amt	 	Number(17,2),
	ins_cr_amt	 	    Number(17,2),
	capitalized_amt	 	Number(17,2),
	cr_period		    Int         ,
	entity_cre_flg	    char(1)     ,
	del_flg		        char(1)     ,
	version_no		    int         ,
	status		        char(1)     ,
	lchg_user_id		varchar2(20),
	lchg_time		    date        ,
	rcre_user_id		varchar2(20),
	rcre_time		    date,
	srl_num 			varchar2(5)
)
TABLESPACE CUSTOM_TBLS;


drop SYNONYM CUSTOM.CIMM_MOD_TBL;
CREATE SYNONYM CUSTOM.CIMM_MOD_TBL FOR CUSTOM.CUST_INS_MASTER_MAINT_MOD;
GRANT insert, update, delete, select ON  CUSTOM.CIMM_MOD_TBL TO TBAADM;
GRANT insert, update, delete, select ON  CUSTOM.CIMM_MOD_TBL TO TBAGEN;
GRANT insert, update, delete, select ON  CUSTOM.CIMM_MOD_TBL TO TBAUTIL;
create index c_cimm_mod_tbl_idx1 on custom.CUST_INS_MASTER_MAINT_MOD(ins_id);
create index c_cimm_mod_tbl_idx2 on custom.CUST_INS_MASTER_MAINT_MOD(asset_grp_id,asset_id);


delete from custom.c_svrsetvar where module_name='LEASE' and sub_module_name='CLIMM' and variable_name='COMISSION_VALUE';

insert into custom.c_svrsetvar values('LEASE','CLIMM','NUMBER','COMISSION_VALUE',5,'N','SYSTEM',sysdate,'01');

drop sequence custom.insId;
CREATE SEQUENCE custom.insId start with 1 maxvalue 999999999999999;
grant usage on custom.insId to tbaadm,custom,tbagen,tbautil;

DROP TABLE CUSTOM.CUST_INS_COVER_MOD_MAINT;


CREATE TABLE CUSTOM.CUST_INS_COVER_MOD_MAINT
(
	ins_id	 			varchar2(20),
	cover_type				varchar2(100),
	cover_flg		        char(1)  ,
	entity_cre_flg		        char(1),
	srl_num             varchar2(5)
)
TABLESPACE CUSTOM_TBLS;


drop SYNONYM CUSTOM.CIMM_COVER_MOD;
CREATE SYNONYM CUSTOM.CIMM_COVER_MOD FOR CUSTOM.CUST_INS_COVER_MOD_MAINT;
GRANT insert, update, delete, select ON  CUSTOM.CIMM_COVER_MOD TO TBAADM;
GRANT insert, update, delete, select ON  CUSTOM.CIMM_COVER_MOD TO TBAGEN;
GRANT insert, update, delete, select ON  CUSTOM.CIMM_COVER_MOD TO TBAUTIL;

create index c_cimm_cover_mod_tbl_idx1 on custom.CUST_INS_COVER_MOD_MAINT(ins_id,cover_type);


DROP TABLE CUSTOM.CUST_INS_COVER_MAINT;


CREATE TABLE CUSTOM.CUST_INS_COVER_MAINT
(
	ins_id	 			varchar2(20),
	cover_type				varchar2(100),
	cover_flg		        char(1)  ,
	entity_cre_flg		        char(1)  ,
	srl_num             varchar2(5)
)
TABLESPACE CUSTOM_TBLS;


drop SYNONYM CUSTOM.CIMM_COVER;
CREATE SYNONYM CUSTOM.CIMM_COVER FOR CUSTOM.CUST_INS_COVER_MAINT;
GRANT insert, update, delete, select ON  CUSTOM.CIMM_COVER TO TBAADM;
GRANT insert, update, delete, select ON  CUSTOM.CIMM_COVER TO TBAGEN;
GRANT insert, update, delete, select ON  CUSTOM.CIMM_COVER TO TBAUTIL;


create index c_cimm_cover_tbl_idx1 on custom.CUST_INS_COVER_MAINT(ins_id,cover_type);


