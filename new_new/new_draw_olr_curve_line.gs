'reinit'
'open F:\reanalysis\output\filter2\olr.filter(8t_17t)_-15-30_60-150.ctl'
'open F:\reanalysis\output\filter2\olr.filter(45t_90t).ctl'
'open F:\reanalysis\output\filter2\olr.2011_-15-30_60-150.ctl'
'open F:\reanalysis\output\filter2\olr.ltm_-15-30_60-150.ctl'
'open F:\reanalysis\output_3\olr.filter(2t_7t)_0-360.ctl'

'set grads off'
'set t 228 320'
'set lat 17.5'
'set lon 110'
'set xlopts 1 1 0.25'
'set ylopts 1 1 0.25'
'set ylint 15'
'set yaxis -60 60 10'
'set cstyle 1'
'set cmark 2'
'd olr'
*'draw title olr.ano 8-17 day period'
*'print'
*'c'
'set grads off'
'set yaxis -60 60 10'
'set cstyle 1'
'set cmark 4'
'd olr.2'
*'draw title olr.ano 35-90 day period'
*'print'
*'c'
*'d olr.3-olr.4'
*'draw title olr.ano origin field'
*'print'
*'c'
'set grads off'
'set yaxis -60 60 10'
'set cstyle 1'
'set cmark 3'
'set ccolor 4'
'd olr.5'
'gxprint F:\reanalysis\img\new_new\olr.curve-lineV4.pdf white'
;