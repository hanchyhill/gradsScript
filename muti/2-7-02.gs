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
nrows=3
ncols=2
args=nrows%' '%ncols
'open F:\reanalysis\output_3\uwund.filter(2t_7t)_0-360.ctl'
'open F:\reanalysis\output_3\vwund.filter(2t_7t)_0-360.ctl'
'open F:\reanalysis\output_3\olr.filter(2t_7t)_0-360.ctl'

'set mproj scaled'
'enable print F:\reanalysis\img\muti\filter(2-7)_wind850_olr.ano.02.gmf'
*whilte to blue
'set lon 70 170'
'set lat -10 30'
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
    'set parea 1 8 1 7'
   'set t 274'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -70 -60 -50 -40 -30 -20 -10 0'
   'set ccols 24 25 26 27 28 29 30 32 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (a)' 
    'set ccolor 1'
    'set cthick 6'
    'set arrscl 0.8 10'
    'set arrowhead 0.1'
*    'set strmden 10'
    'd uwnd;vwnd.2'
   p = p + 1
   
   
*2
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 276'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -70 -60 -50 -40 -30 -20 -10 0'
   'set ccols 24 25 26 27 28 29 30 32 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (b)' 
    'set ccolor 1'
    'set cthick 6'
    'set arrscl 0.8 10'
    'set arrowhead 0.1'
*    'set strmden 10'
    'd uwnd;vwnd.2'
   p = p + 1
   
*3
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 278'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -70 -60 -50 -40 -30 -20 -10 0'
   'set ccols 24 25 26 27 28 29 30 32 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (c)' 
    'set ccolor 1'
    'set cthick 6'
    'set arrscl 0.8 10'
    'set arrowhead 0.1'
*    'set strmden 10'
    'd uwnd;vwnd.2'
   p = p + 1

*4
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 280'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -70 -60 -50 -40 -30 -20 -10 0'
   'set ccols 24 25 26 27 28 29 30 32 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (d)' 
    'set ccolor 1'
    'set cthick 6'
    'set arrscl 0.8 10'
    'set arrowhead 0.1'
*    'set strmden 10'
    'd uwnd;vwnd.2'
   p = p + 1
   
*5
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 281'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -70 -60 -50 -40 -30 -20 -10 0'
   'set ccols 24 25 26 27 28 29 30 32 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (e)' 
    'set ccolor 1'
    'set cthick 6'
    'set arrscl 0.8 10'
    'set arrowhead 0.1'
*    'set strmden 10'
    'd uwnd;vwnd.2'
   p = p + 1
   
*6
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 289'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -70 -60 -50 -40 -30 -20 -10 0'
   'set ccols 24 25 26 27 28 29 30 32 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (f)' 
    'set ccolor 1'
    'set cthick 6'
    'set arrscl 0.8 10'
    'set arrowhead 0.1'
*    'set strmden 10'
    'd uwnd;vwnd.2'
   p = p + 1
   


  'set vpage off'
'print'
'disable print'
;



