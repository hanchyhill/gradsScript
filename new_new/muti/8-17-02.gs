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
'open F:\reanalysis\output\filter2\uwnd.filter(8t_17t)_-15-30_60-150.ctl'
'open F:\reanalysis\output\filter2\vwnd.filter(8t_17t)_-15-30_60-150.ctl'
'open F:\reanalysis\output\filter2\olr.filter(8t_17t)_-15-30_60-150.ctl'
'enable print F:\reanalysis\img\muti\filter(8-17)_wind850_olr.ano.02.gmf'
*whilte to blue

 'set rgb 22 91 21 245'

 'set rgb 23 28 6 252'

 'set rgb 24 20 36 246'

 'set rgb 25 51 85 232'

 'set rgb 26 57 111 232'

 'set rgb 27 41 130 246'

 'set rgb 28 24 151 255'

 'set rgb 29 9 173 255'

 'set rgb 30 21 191 252'

 'set rgb 31 88 196 245'

 'set rgb 32 146 208 239'

 'set rgb 33 177 222 244'

 'set rgb 34 255 255 200'


*鍙栨秷缁忕含姣斾緥鑷姩璋冩暣
*'set mproj scaled'
panels(args)
*p 琛ㄧず褰撳墠鎵€鍦ㄧ殑铏氶〉鏄鍑犱釜铏氶〉
p = 1
*ptot琛ㄧず鎬诲叡鐨勮櫄椤垫暟閲?
ptot = nrows * ncols
*鎸塸anel寰幆骞剁敾鍥?

*1
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 263'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -50 -45 -40 -35 -30 -25 -20 -15 -10 -5 0'
   'set ccols 22 23 24 25 26 27 28 29 30 31 32 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (a)' 
    'set ccolor 1'
    'set cthick 6'
    'set arrscl 1.0 8'
    'set arrowhead 0.1'
*    'set strmden 10'
    'd uwnd;vwnd.2'
   p = p + 1
   
   
*2
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 265'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -50 -45 -40 -35 -30 -25 -20 -15 -10 -5 0'
   'set ccols 22 23 24 25 26 27 28 29 30 31 32 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (b)' 
    'set ccolor 1'
    'set cthick 6'
    'set arrscl 1.0 8'
    'set arrowhead 0.1'
*    'set strmden 10'
    'd uwnd;vwnd.2'
   p = p + 1
   
*3
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 267'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -50 -45 -40 -35 -30 -25 -20 -15 -10 -5 0'
   'set ccols 22 23 24 25 26 27 28 29 30 31 32 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (c)' 
    'set ccolor 1'
    'set cthick 6'
    'set arrscl 1.0 8'
    'set arrowhead 0.1'
*    'set strmden 10'
    'd uwnd;vwnd.2'
   p = p + 1

*4
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 269'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -50 -45 -40 -35 -30 -25 -20 -15 -10 -5 0'
   'set ccols 22 23 24 25 26 27 28 29 30 31 32 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (d)' 
    'set ccolor 1'
    'set cthick 6'
    'set arrscl 1.0 8'
    'set arrowhead 0.1'
*    'set strmden 10'
    'd uwnd;vwnd.2'
   p = p + 1
   
*5
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 271'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -50 -45 -40 -35 -30 -25 -20 -15 -10 -5 0'
   'set ccols 22 23 24 25 26 27 28 29 30 31 32 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (e)' 
    'set ccolor 1'
    'set cthick 6'
    'set arrscl 1.0 8'
    'set arrowhead 0.1'
*    'set strmden 10'
    'd uwnd;vwnd.2'
   p = p + 1
   
*6
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 272'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -50 -45 -40 -35 -30 -25 -20 -15 -10 -5 0'
   'set ccols 22 23 24 25 26 27 28 29 30 31 32 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (f)' 
    'set ccolor 1'
    'set cthick 6'
    'set arrscl 1.0 8'
    'set arrowhead 0.1'
*    'set strmden 10'
    'd uwnd;vwnd.2'
   p = p + 1
   
*7
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 274'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -50 -45 -40 -35 -30 -25 -20 -15 -10 -5 0'
   'set ccols 22 23 24 25 26 27 28 29 30 31 32 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (g)' 
    'set ccolor 1'
    'set cthick 6'
    'set arrscl 1.0 8'
    'set arrowhead 0.1'
*    'set strmden 10'
    'd uwnd;vwnd.2'
   p = p + 1

*8
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 276'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -50 -45 -40 -35 -30 -25 -20 -15 -10 -5 0'
   'set ccols 22 23 24 25 26 27 28 29 30 31 32 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (h)' 
    'set ccolor 1'
    'set cthick 6'
    'set arrscl 1.0 8'
    'set arrowhead 0.1'
*    'set strmden 10'
    'd uwnd;vwnd.2'
   p = p + 1

  'set vpage off'
'print'
'disable print'
;



