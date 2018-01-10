*
* 濞达綀娉曢弫顦朼nels闁告垼濮ら弳鐔衡偓鍦仧楠炲洦绋夐埀顒併亜闂堟侗妯嬮柛?
*By 婵炴挸鎳橀ˉ?mofangbao) from bbs.06climate.com
*濠碘€冲€归悘澶愬箵閹邦喓浠涙繛灞稿墲濠€涔竌nels.gsf闁哄倸娲ｅ▎銏ゆ晬鐏炶棄鐏熼柛娆樺灟娴滄帡宕㈢猾鐜禷ds閻庤蓱閺岀喐绋夌€ｎ厽绁?
*濞戞挸顑堝ù鍥捶閺夋寧绲婚柨娑欑摬tp://grads.iges.org/grads/scripts/panels.gsf
*濞戞挸顑堝ù鍥触鎼淬値鍤為柡鈧崜褏鏋傚ù婊冪獏ib闁烩晩鍠栫紞宥夋晬鐏炵瓔娲ら柡瀣矋濡茬珳pengrads闁告帗鐟ヨぐ鍙夌閵夈儱鐓傚☉鎾愁儔濞肩増娼诲▎搴ㄥ殝闂佸墽鍋撶敮鎾蓟閵壯勭畽閻庣數鎳撶花鏌ユ儍閸曨厽绐楃憸?
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
'enable print F:\reanalysis\img\new\V2_filter(35-90)_wind850_olr.ano.final2.gmf'
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


*闁告瑦鐗楃粔椋庣磼韫囨洖鎯堟慨锝嗘煣缁躲儵鎳涢鍕楅悹瀣暞閺?
*'set mproj scaled'
panels(args)
*p 閻炴稏鍔庨妵姘炽亹閹惧啿顤呴柟纰樺亾闁革负鍔庡▓鎴︽惞濮樿翰鈧寮伴婊庡剳闁告垹濮抽柌婊堟惞濮樿翰鈧?
p = 1
*ptot閻炴稏鍔庨妵姘跺箑鐠囨彃褰欓柣銊ュ濞呭嫭銇勯崹顐ｆ闂?
ptot = nrows * ncols
*闁圭銆宎nel鐎甸偊浜為獮鍡涚嵁閸撲焦鏆伴柛?

*1
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 253'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  

   'set clevs -30 -20 -10  0'
   'set ccols 23  27  31  33 0'
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

   'set clevs -30 -20 -10  0'
   'set ccols 23  27  31  33 0'
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

   'set clevs -30 -20 -10  0'
   'set ccols 23  27  31  33 0'
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

   'set clevs -30 -20 -10  0'
   'set ccols 23  27  31  33 0'
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

   'set clevs -30 -20 -10  0'
   'set ccols 23  27  31  33 0'
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

   'set clevs -30 -20 -10  0'
   'set ccols 23  27  31  33 0'
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

   'set clevs -30 -20 -10  0'
   'set ccols 23  27  31  33 0'
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

   'set clevs -30 -20 -10  0'
   'set ccols 23  27  31  33 0'
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



