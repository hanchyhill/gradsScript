*
* ʹ��panels����ʵ��һҳ��ͼ
*By ���(mofangbao) from bbs.06climate.com
*�����ʾû��panels.gsf�ļ��������ȥgrads�ٷ�����
*���ص�ַ��ftp://grads.iges.org/grads/scripts/panels.gsf
*���غ��������libĿ¼�������opengrads����Ե�����������Ӳ鿴��Ӧ��Ŀ¼
* http://bbs.06climate.com/forum.php?mod=viewthread&tid=2771
*
'reinit'
rc = gsfallow("on")
nrows=2
ncols=2
args=nrows%' '%ncols
'sdfopen E:\program\ncep\skt.sfc.mon.mean.nc'
*ȡ����γ�����Զ�����
'set mproj scaled'
panels(args)
*p ��ʾ��ǰ���ڵ���ҳ�ǵڼ�����ҳ
p = 1
*ptot��ʾ�ܹ�����ҳ����
ptot = nrows * ncols
*��panelѭ������ͼ
while (p <= ptot)
*���õ�p����ҳ 
    _vpg.p
    'set parea 1 9.8 1 7.5'
   'set t 'p
   'set grads off'
   'set gxout shaded'
   'set font 2'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  
   'd skt'
   'set font 0'
   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
    'set font 5';'set strsiz 0.3 0.3'
   'draw string 3.5 8 skt(t='p',panel='p')' 
   p = p + 1
endwhile
  'set vpage off'
'printim e:\program\ncep\skt.png png white x800 y600'
;