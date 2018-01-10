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
*'set rgb 20 36 0 216'
*'set rgb 21 24 28 247'
*'set rgb 22 40 87 255'
*'set rgb 23 61 135 255'
*'set rgb 24 86 176 255'
*'set rgb 25 117 211 255'
*'set rgb 26 153 234 255'
*'set rgb 27 188 249 255'
*'set rgb 28 234 255 255'
*'set rgb 29 255 255 234'
*'set rgb 30 255 241 188'
*'set rgb 31 255 214 153'
*'set rgb 32 255 172 117'
*'set rgb 33 255 120 86'
*'set rgb 34 255 61 61'
*'set rgb 35 247 39 53'
*'set rgb 36 216 21 47'
*'set rgb 37 165 0 33'
'run F:\reanalysis\script\new_new\muti\18colors.gs'

*'set mproj scaled'
panels(args)
p = 1
ptot = nrows * ncols

*1
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 237'
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
   'set ccols 21 22 23 24 25 26 28 0'
*   'set clevs -30 -20 -10 0'
*   'set ccols 22 24 25 26 0'
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
    'd skip(uwnd,2,2);skip(vwnd.2,2,2)'
   p = p + 1
   
   
*2
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 245'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set xlint 20'
   'set ylint 10' 
   'set grid off'
   'set clevs -30 -25 -20 -15 -10 -5 0'
   'set ccols 21 22 23 24 25 26 28 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
    'draw title (b)' 
    'set ccolor 1'
    'set cthick 3'
    'set arrscl 0.8 8'
    'set arrowhead 0.12'
*    'set strmden 10'
    'd skip(uwnd,2,2);skip(vwnd.2,2,2)'
   p = p + 1
   
*3
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 252'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set xlint 20'
   'set ylint 10'

   'set clevs -30 -25 -20 -15 -10 -5 0'
   'set ccols 21 22 23 24 25 26 28 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (c)' 
    'set ccolor 1'
    'set cthick 3'
    'set arrscl 0.8 8'
    'set arrowhead 0.12'
*    'set strmden 10'
    'd skip(uwnd,2,2);skip(vwnd.2,2,2)'
   p = p + 1

*4
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 259'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set xlint 20'
   'set ylint 10'

   'set clevs -30 -25 -20 -15 -10 -5 0'
   'set ccols 21 22 23 24 25 26 28 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (d)' 
    'set ccolor 1'
    'set cthick 3'
    'set arrscl 0.8 8'
    'set arrowhead 0.12'
*    'set strmden 10'
    'd skip(uwnd,2,2);skip(vwnd.2,2,2)'
   p = p + 1
   
*5
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 266'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set xlint 20'
   'set ylint 10'

   'set clevs -30 -25 -20 -15 -10 -5 0'
   'set ccols 21 22 23 24 25 26 28 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (e)' 
    'set ccolor 1'
    'set cthick 3'
    'set arrscl 0.8 8'
    'set arrowhead 0.12'
*    'set strmden 10'
    'd skip(uwnd,2,2);skip(vwnd.2,2,2)'
   p = p + 1
   
*6
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 274'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set xlint 20'
   'set ylint 10'

   'set clevs -30 -25 -20 -15 -10 -5 0'
   'set ccols 21 22 23 24 25 26 28 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (f)' 
    'set ccolor 1'
    'set cthick 3'
    'set arrscl 0.8 8'
    'set arrowhead 0.12'
*    'set strmden 10'
    'd skip(uwnd,2,2);skip(vwnd.2,2,2)'
   p = p + 1
   
*7
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 281'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set xlint 20'
   'set ylint 10'

   'set clevs -30 -25 -20 -15 -10 -5 0'
   'set ccols 21 22 23 24 25 26 28 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (g)' 
    'set ccolor 1'
    'set cthick 3'
    'set arrscl 0.8 8'
    'set arrowhead 0.12'
*    'set strmden 10'
    'd skip(uwnd,2,2);skip(vwnd.2,2,2)'
   p = p + 1

*8
    _vpg.p
*    'set parea 1 8 1 7'
   'set t 288'
   'set grads off'
   'set gxout shaded'
   'set font 0'
   'set xlint 20'
   'set ylint 10'

   'set clevs -30 -25 -20 -15 -10 -5 0'
   'set ccols 21 22 23 24 25 26 28 0'
   'set cmax 0'
   'd olr.3'
   'set font 0'
*   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
*    'set font 5';'set strsiz 0.3 0.3'
    'draw title (h)' 
    'set ccolor 1'
    'set cthick 3'
    'set arrscl 0.8 8'
    'set arrowhead 0.12'
*    'set strmden 10'
    'd skip(uwnd,2,2);skip(vwnd.2,2,2)'
   p = p + 1

  'set vpage off'
  'gxprint F:\reanalysis\img\new_new\filter(45-90)_wind850_olr.ano.final5.pdf white'
;



