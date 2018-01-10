*
* 浣跨敤panels鍑芥暟瀹炵幇涓€椤靛鍥?
*By 娓呴(mofangbao) from bbs.06climate.com
*濡傛灉鎻愮ず娌℃湁panels.gsf鏂囦欢锛屽垯鍙互鍘籫rads瀹樻柟涓嬭浇
*涓嬭浇鍦板潃锛歠tp://grads.iges.org/grads/scripts/panels.gsf
*涓嬭浇鍚庤鏀剧疆浜巐ib鐩綍锛屽鏋滄槸opengrads鍒欏彲浠ュ埌涓嬮潰杩欎釜閾炬帴鏌ョ湅瀵瑰簲鐨勭洰褰?
* http://bbs.06climate.com/forum.php?mod=viewthread&tid=2771
*
'reinit'
rc = gsfallow("on")
nrows=4
ncols=2
args=nrows%' '%ncols
'open F:\reanalysis\output\filter2\uwnd.filter(35t_90t)_-15-30_60-150.ctl'
'open F:\reanalysis\output\filter2\vwnd.filter(35t_90t)_-15-30_60-150.ctl'
'open F:\reanalysis\output\filter2\olr.filter(35t_90t)_-15-30_60-150.ctl'
'enable print F:\reanalysis\img\muti\filter(35-90)_wind850_olr.ano_test3.gmf'
*whilte to blue
 'set rgb 20 36 0 216'
 'set rgb 21 24 28 247'
 'set rgb 22 40 87 255'
 'set rgb 23 61 135 255'
 'set rgb 24 86 176 255'
 'set rgb 25 117 211 255'
 'set rgb 26 153 234 255'
 'set rgb 27 188 249 255'
 'set rgb 28 234 255 255'
 'set rgb 29 255 255 234'
 'set rgb 30 255 241 188'
 'set rgb 31 255 214 153'
 'set rgb 32 255 172 117'
 'set rgb 33 255 120 86'
 'set rgb 34 255 61 61'
 'set rgb 35 247 39 53'
 'set rgb 36 216 21 47'
 'set rgb 37 165 0 33'


*鍙栨秷缁忕含姣斾緥鑷姩璋冩暣
*'set mproj scaled'
panels(args)
*p 琛ㄧず褰撳墠鎵€鍦ㄧ殑铏氶〉鏄鍑犱釜铏氶〉
p = 1
*ptot琛ㄧず鎬诲叡鐨勮櫄椤垫暟閲?
ptot = nrows * ncols
*鎸塸anel寰幆骞剁敾鍥?
while (p <= ptot)
*璁剧疆绗琾涓櫄椤?
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 'p
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -30 -25 -20 -15 -10 -5 0'
   'set ccols 21 22 23 24 25 26 27 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title olr(t='p',panel='p')' 
    'set ccolor 1'
    'set cthick 6'
    'set arrscl 1.0 8'
    'set arrowhead 0.1'
*    'set strmden 10'
    'd uwnd;vwnd.2'
   p = p + 1
endwhile
  'set vpage off'
'print'
'disable print'
;



