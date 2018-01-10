*
* 娴ｈ法鏁anels閸戣姤鏆熺€圭偟骞囨稉鈧い闈涱樋閸?
*By 濞撳懘顥?mofangbao) from bbs.06climate.com
*婵″倹鐏夐幓鎰仛濞屸剝婀乸anels.gsf閺傚洣娆㈤敍灞藉灟閸欘垯浜掗崢绫玶ads鐎规ɑ鏌熸稉瀣祰
*娑撳娴囬崷鏉挎絻閿涙瓲tp://grads.iges.org/grads/scripts/panels.gsf
*娑撳娴囬崥搴ゎ嚞閺€鍓х枂娴滃窅ib閻╊喖缍嶉敍灞筋洤閺嬫粍妲竜pengrads閸掓瑥褰叉禒銉ュ煂娑撳娼版潻娆庨嚋闁剧偓甯撮弻銉ф箙鐎电懓绨查惃鍕窗瑜?
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
'enable print F:\reanalysis\img\muti\filter(35-90)_wind850_olr.ano.final2.gmf'
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


*閸欐牗绉风紒蹇曞惈濮ｆ柧绶ラ懛顏勫З鐠嬪啯鏆?
*'set mproj scaled'
panels(args)
*p 鐞涖劎銇氳ぐ鎾冲閹碘偓閸︺劎娈戦搹姘躲€夐弰顖滎儑閸戠姳閲滈搹姘躲€?
p = 1
*ptot鐞涖劎銇氶幀璇插彙閻ㄥ嫯娅勬い鍨殶闁?
ptot = nrows * ncols
*閹稿「anel瀵邦亞骞嗛獮鍓佹暰閸?

*1
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 253'
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
   'set t 258'
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
   'set t 263'
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
   'set t 268'
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
   'set t 273'
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
   'set t 278'
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
   'set t 283'
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
   'set t 288'
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



