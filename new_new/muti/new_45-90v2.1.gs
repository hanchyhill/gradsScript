*
* 婵炶揪缍€濞夋洟寮ˇ鏈糿els闂佸憡鍨兼慨銈夊汲閻旇　鍋撻崷顓炰户妤犵偛娲︾粙澶愬焵椤掍降浜滈梻鍫熶緱濡鏌?
*By 濠电偞鎸搁幊姗€藟?mofangbao) from bbs.06climate.com
*婵犵鈧啿鈧綊鎮樻径鎰闁归偊鍠撴禒娑欑箾鐏炵澧叉繝鈧稊绔宯els.gsf闂佸搫鍊稿ú锝呪枎閵忋倖鏅悘鐐舵閻忕喖鏌涘▎妯虹仧濞存粍甯″畷銏㈢尵閻滅Ψds闁诲氦顫夎摫闁哄瞼鍠愮粙澶屸偓锝庡幗缁?
*婵炴垶鎸搁鍫澝归崶顒€鎹堕柡澶嬪缁插鏌ㄥ☉娆戞懍tp://grads.iges.org/grads/scripts/panels.gsf
*婵炴垶鎸搁鍫澝归崶顒€瑙﹂幖娣€ら崵鐐烘煛閳ь剟宕滆閺嬪倸霉濠婂啰鐛廼b闂佺儵鏅╅崰鏍礊瀹ュ鏅悘鐐电摂濞层倝鏌＄€ｎ偆鐭嬫俊鑼彸pengrads闂佸憡甯楅悷銉ㄣ亹閸欏顩烽柕澶堝劚閻撳倸鈽夐幘鎰佸剶婵炶偐澧楀璇测枎鎼淬劌娈濋梻浣稿⒔閸嬫挾鏁幘顔艰摕闁靛／鍕暯闁诲海鏁搁幊鎾惰姳閺屻儲鍎嶉柛鏇ㄥ幗缁愭鎲?
* http://bbs.06climate.com/forum.php?mod=viewthread&tid=2771
*
'reinit'
rc = gsfallow("on")
nrows=4
ncols=2
args=nrows%' '%ncols
'open F:\reanalysis\output\filter2\uwund.filter(45t_90t).ctl'
'open F:\reanalysis\output\filter2\vwund.filter(45t_90t).ctl'
'open F:\reanalysis\output\filter2\olr.filter(45t_90t).ctl'

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


*闂佸憡鐟﹂悧妤冪矓妞嬪海纾奸煫鍥ㄦ礀閹牊鎱ㄩ敐鍡樼叄缂佽翰鍎甸幊娑㈩敂閸曨倣妤呮偣鐎ｎ亜鏆為柡?
*'set mproj scaled'
panels(args)
*p 闁荤偞绋忛崝搴ㄥΦ濮樼偨浜归柟鎯у暱椤ゅ懘鏌熺喊妯轰壕闂侀潻璐熼崝搴♀枔閹达附鎯炴慨妯跨堪閳ь剙顦靛浼搭敍濠婂骸鍓抽梺鍛婂灩婵娊鏌屽鍫熸優婵缈伴埀?
p = 1
*ptot闁荤偞绋忛崝搴ㄥΦ濮樿泛绠戦悹鍥ㄥ絻瑜版瑩鏌ｉ妸銉ヮ伂婵炲懎瀚妵鍕垂椤愶絾顔嶉梻?
ptot = nrows * ncols
*闂佸湱顭堥妴瀹巒el閻庣敻鍋婃禍鐐虹嵁閸℃稓宓侀柛鎾茬劍閺嗕即鏌?

*1
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 253'
   'set lat -15 30'
   'set lon 60 150'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.3';'set  ylopts 1 4 0.3' 
   'set xlint 20'
   'set ylint 10'
   'set grid off'
   'set clevs -30 -25 -20 -15 -10 -5 0'
   'set ccols 21 22 23 24 25 26 27 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (a)' 
    'set grid off'
    'set ccolor 1'
    'set cthick 3'
    'set arrscl 0.8 8'
    'set arrowhead 0.12'
*    'set strmden 10'
    'd skip(uwnd,2,1);skip(vwnd.2,2,1)'
   p = p + 1
   
   
*2
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 258'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.3';'set  ylopts 1 4 0.3' 
   'set xlint 20'
   'set ylint 10' 
   'set grid off'
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
    'set cthick 3'
    'set arrscl 0.8 8'
    'set arrowhead 0.12'
*    'set strmden 10'
    'd skip(uwnd,2,1);skip(vwnd.2,2,1)'
   p = p + 1
   
*3
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 263'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.3';'set  ylopts 1 4 0.3' 
   'set xlint 20'
   'set ylint 10'

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
    'set cthick 3'
    'set arrscl 0.8 8'
    'set arrowhead 0.12'
*    'set strmden 10'
    'd skip(uwnd,2,1);skip(vwnd.2,2,1)'
   p = p + 1

*4
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 268'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.3';'set  ylopts 1 4 0.3' 
   'set xlint 20'
   'set ylint 10'

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
    'set cthick 3'
    'set arrscl 0.8 8'
    'set arrowhead 0.12'
*    'set strmden 10'
    'd skip(uwnd,2,1);skip(vwnd.2,2,1)'
   p = p + 1
   
*5
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 273'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.3';'set  ylopts 1 4 0.3' 
   'set xlint 20'
   'set ylint 10'

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
    'set cthick 3'
    'set arrscl 0.8 8'
    'set arrowhead 0.12'
*    'set strmden 10'
    'd skip(uwnd,2,1);skip(vwnd.2,2,1)'
   p = p + 1
   
*6
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 278'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.3';'set  ylopts 1 4 0.3' 
   'set xlint 20'
   'set ylint 10'

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
    'set cthick 3'
    'set arrscl 0.8 8'
    'set arrowhead 0.12'
*    'set strmden 10'
    'd skip(uwnd,2,1);skip(vwnd.2,2,1)'
   p = p + 1
   
*7
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 283'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.3';'set  ylopts 1 4 0.3' 
   'set xlint 20'
   'set ylint 10'

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
    'set cthick 3'
    'set arrscl 0.8 8'
    'set arrowhead 0.12'
*    'set strmden 10'
    'd skip(uwnd,2,1);skip(vwnd.2,2,1)'
   p = p + 1

*8
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 288'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 4 0.3';'set  ylopts 1 4 0.3' 
   'set xlint 20'
   'set ylint 10'

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
    'set cthick 3'
    'set arrscl 0.8 8'
    'set arrowhead 0.12'
*    'set strmden 10'
    'd skip(uwnd,2,1);skip(vwnd.2,2,1)'
   p = p + 1

  'set vpage off'
  'gxprint F:\reanalysis\img\new_new\filter(45-90)_wind850_olr.ano.final3.pdf white'
;



