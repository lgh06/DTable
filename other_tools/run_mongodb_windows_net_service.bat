rem Open this file in ANSI / GBK / GB2312 encoding.
@rem Mongodb�����ϵ�windows�汾��װ����Ĭ��Ϊ�������
@rem ��û�����У�ִ�д˽ű���������mongdodb���������
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
net start mongodb