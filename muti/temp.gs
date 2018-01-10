*
* ????????nels????????????????????????????
*By ???????mofangbao) from bbs.06climate.com
*???????????????????????nels.gsf??????????????????????????ds??????????????
*??????????????????tp://grads.iges.org/grads/scripts/panels.gsf
*?????????????????????????ib?????????????????????pengrads????????????????????????????????????????????????????????
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


*?????????????????????????????????
*'set mproj scaled'
panels(args)
*p ?????????????????????????????????????????????????????
p = 1
*ptot?????????????????????????????
ptot = nrows * ncols
*?????nel????????????????

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