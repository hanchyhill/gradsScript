'reinit'
*'open F:\reanalysis\output\olr.filter(30t_90t)_-15-25_60-150.ctl'
*'open F:\reanalysis\output\olr.filter(60t_80t)_-15-25_60-150.ctl'
'open F:\reanalysis\output\olr.filter(8t_17t)_-15-25_60-150.ctl'
'enable print F:\reanalysis\img\filter_filed\H_olr_8d_17d_imamge.gmf'
'set lon 110'
'set lat -10 25'
'set t 213 334'
*'set t 182 334'
'set xyrev on'
'set gxout shaded'
'd olr'
'run cbar'
'draw title olr filter(8d_17d) -10S 25N'
'print' 
'c'
'set lat -10 25'
'set t 244 334'
'set xyrev on'
'set gxout shaded'
'd olr'
'run cbar'
'draw title olr filter(8d_17d) -10S 25N'
'print' 
'c'
'set t 213 334'
'set lat 18'
'set lon 60 150'
'd olr'
'run cbar'
'draw title olr filter(8d_17d) -60E 150E'
'print' 
'c'
'set t 244 334'
'set lat 18'
'set lon 80 140'
'd olr'
'run cbar'
'draw title olr filter(8d_17d) -80E 140E'
'print' 
'c'
'set t 213 243'

'set lat 18'
'set lon 80 140'
'd olr'
'run cbar'
'draw title olr filter(8d_17d) -80E 140E Aug.'
'print' 
'c'
'set t 244 273'
'set lat 18'
'set lon 80 140'
'd olr'
'run cbar'
'draw title olr filter(8d_17d) -80E 140E Sep.'
'print' 
'c'
'set t 274 304'
'set lat 18'
'set lon 80 140'
'd olr'
'run cbar'
'draw title olr filter(8d_17d) -80E 140E Oct.'
'print' 
'c'
'set t 305 334'
'set lat 18'
'set lon 80 140'
'd olr'
'run cbar'
'draw title olr filter(8d_17d) -80E 140E Nov.'
'print' 
'disable print'
;
