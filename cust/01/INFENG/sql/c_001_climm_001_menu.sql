delete from finfadm.urm_menu_tbl where menu_id = 'CLIMM';
delete from finfadm.urm_menu_desc_tbl where menu_id = 'CLIMM';
delete from finfadm.urm_role_menu_tbl where menu_id = 'CLIMM';
delete from tbaadm.mod where mop_id = 'CLIMM';
delete from tbaadm.mod_txt where mop_id = 'CLIMM';
delete from tbaadm.mno where mop_id = 'CLIMM';
delete from tbaadm.oat where mop_id = 'CLIMM';

insert into finfadm.urm_menu_tbl  values('CLIMM','CO','10.2','UC','N',null);
insert into finfadm.urm_menu_desc_tbl values ('CLIMM','CO','10.2','INFENG','Insuarance Master Maintenance','');
insert into finfadm.urm_role_menu_tbl values('MASTER_ROLE','01','CLIMM','CO','10.2',1,0);

INSERT INTO tbaadm.MOD
(mop_id,entity_cre_flg,del_flg,mop_type,exe_name,input_filename,additional_params,db_status,mop_term_class_1,
mop_term_class_2,mop_term_class_3,mop_term_class_4,mop_term_class_5,mop_term_class_6,mop_term_class_7,
mop_term_class_8,mop_term_class_9,mop_term_class_10,mop_menu_param,mop_menu_secu_ind,mop_acpt_passwd_flg,
mop_term_type,mop_execution_type,node_type,log_operation_flg,mod_tenor,lchg_user_id,
rcre_user_id,lchg_time,rcre_time,ts_cnt,work_class,template_details,bank_id)
VALUES('CLIMM','Y','N','U','https://$W/finbranch/','Customize/Customize_ctrl.jsp?sessionid=$S','&sectok=$T&finsessionid=$S&fabsessionid=$C&mo=CLIMM','F','BT','TT','FT','MT','','','','','','','FINW','M','N','','','','','F','UBSROOT','UBSROOT',SYSDATE,SYSDATE,0,'001 26999N','','01');



INSERT INTO tbaadm.MOD_TXT (MOP_ID,LANG_CODE,USER_MOP_ID,MOP_TEXT,MOP_HELP_TEXT,ENTITY_CRE_FLG,LCHG_USER_ID,RCRE_USER_ID,LCHG_TIME,RCRE_TIME,TS_CNT,BANK_ID)
VALUES('CLIMM','INFENG','CLIMM','Insuarance Master Maintenance','','Y','UBSADMIN','UBSADMIN',SYSDATE,SYSDATE,0,'01');

INSERT INTO tbaadm.OAT (MOP_ID,APPL_ID,LCHG_USER_ID,LCHG_TIME,RCRE_USER_ID,RCRE_TIME,TS_CNT,BANK_ID)
VALUES('CLIMM','G1','UBSADMIN',SYSDATE,'UBSADMIN',SYSDATE,0,'01');



INSERT INTO tbaadm.MNO (MENU_ID,MOP_NUM,MOP_ID,ENTITY_CRE_FLG,MENU_TYPE,LCHG_USER_ID,LCHG_TIME,RCRE_USER_ID,RCRE_TIME,TS_CNT,BANK_ID)
VALUES('G1B11A2','03','CLIMM','Y','U','UBSADMIN',SYSDATE,'UBSADMIN',SYSDATE,0,'01');

COMMIT;

grant all privileges on finfadm.fcsceserverclienttbl to tbaadm, tbautil, tbagen, crmuser;

