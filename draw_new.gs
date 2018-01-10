'reinit'
'open F:\reanalysis\output\filter2\uwnd.filter(35t_90t)_-15-30_60-150.ctl'
'open F:\reanalysis\output\filter2\vwnd.filter(35t_90t)_-15-30_60-150.ctl'
'open F:\reanalysis\output\filter2\olr.filter(35t_90t)_-15-30_60-150.ctl'
'set grads off'
'set grid off'
*'set lon 70 150'
*'set dfile 1'
*182/213/244/274/305/335
mon = Aug
inti = 214
days = 31
'set t 'inti
*
'enable print F:\reanalysis\img\final\filter(35-90)_wind850_olr.ano_'mon'.gmf'
k=0
while(k<days)
'set gxout shaded'
'set grads off'
'set cmax 0'
'set cint 1'
'set t 'inti+k
'set xlopts 1 4  0.20'
'set ylopts 1 4  0.16'
'd olr.3*0.1'
'cbarn'
'set gxout contour'
'set cint 2'
'd olr.3*0.1'
'set ccolor 1'
'set arrscl 0.8 10'
'set arrowhead 0.1'
'd uwnd;vwnd.2'
'draw title (35-90d period)wind850&olr.ano 'mon' 'k+1 
'print'
'c'
k=k+1
endwhile
'disable print'
;
