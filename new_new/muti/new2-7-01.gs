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
nrows=2
ncols=2
args=nrows%' '%ncols
'open F:\reanalysis\output_3\uwund.filter(2t_7t)_0-360.ctl'
'open F:\reanalysis\output_3\vwund.filter(2t_7t)_0-360.ctl'
'open F:\reanalysis\output_3\olr.filter(2t_7t)_0-360.ctl'

'set mproj scaled'
'enable print F:\reanalysis\img\new_new\filter(2-7)_wind850_olr.ano.01.gmf'
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
    'set parea 1 8 1 7'
    'set t 266'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 7 0.25';'set  ylopts 1 7 0.25'  
   'set xlint 20'
   'set ylint 10'
   'set clevs -60  -40  -20  0'
   'set ccols 24  26  30  32  0'
   'set csmooth on'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (a)' 
    'set ccolor 1'
    'set cthick 10'
*    'set arrscl 0.8 10'
    'set arrowhead 0.15'
   'set  xlopts 1 7 0.25';'set  ylopts 1 7 0.25'  
   'set xlint 20'
   'set ylint 10'
*    'set strmden 10'
    'd skip(uwnd,2,1);skip(vwnd.2,2,1)'
   p = p + 1
   
   
*2
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 268'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 7 0.25';'set  ylopts 1 7 0.25'  
   'set xlint 20'
   'set ylint 10'
   'set clevs -60  -40  -20  0'
   'set ccols 24  26  30  32  0'
      'set csmooth on'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (b)' 
    'set cthick 8'
*    'set arrscl 0.8 10'
    'set arrowhead 0.15'
   'set  xlopts 1 7 0.25';'set  ylopts 1 7 0.25'  
   'set xlint 20'
   'set ylint 10'
*    'set strmden 10'
    'd skip(uwnd,2,1);skip(vwnd.2,2,1)'
   p = p + 1
   
*3
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 270'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 7 0.25';'set  ylopts 1 7 0.25'  
   'set xlint 20'
   'set ylint 10'
   'set clevs -60  -40  -20  0'
   'set ccols 24  26  30  32  0'
      'set csmooth on'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (c)' 
    'set ccolor 1'
    'set cthick 8'
*    'set arrscl 0.8 10'
    'set arrowhead 0.15'
   'set  xlopts 1 7 0.25';'set  ylopts 1 7 0.25'  
   'set xlint 20'
   'set ylint 10'
*    'set strmden 10'
    'd skip(uwnd,2,1);skip(vwnd.2,2,1)'
   p = p + 1

*4
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 272'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set  xlopts 1 7 0.25';'set  ylopts 1 7 0.25'  
   'set xlint 20'
   'set ylint 10'
   'set clevs -60  -40  -20  0'
   'set ccols 24  26  30  32  0'
      'set csmooth on'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (d)' 
    'set ccolor 1'
    'set cthick 8'
*    'set arrscl 0.8 10'
    'set arrowhead 0.15'
   'set  xlopts 1 7 0.25';'set  ylopts 1 7 0.25'  
   'set xlint 20'
   'set ylint 10'
*    'set strmden 10'
    'd skip(uwnd,2,1);skip(vwnd.2,2,1)'
   p = p + 1
   

   


  'set vpage off'
'print'
'disable print'
;



