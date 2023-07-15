import React from 'react'
import { POpovers } from '../Extra'
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Aws, Azure, cloud } from '../Data/serviceMap';

function Stacks() {
  return (
    <div>
       {/* Databases / data storages */}
       <div className='fronend_framework'> 
          <div className='backend' style={{paddingTop:2}}>
          Cloud databases, warehouses, and storage.
          </div>

          <div className='languages_title'> AWS </div>
          <div className='item_of_lanuage'>
            {Aws.map((item) => (
              <div className='item_group'

              >

                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <div className='img'
                        variant="contained" {...bindTrigger(popupState)}>
                        <img src={item.image} width={55} height={55} />
                      </div>
                      <Popover
                    PaperProps={{
                      style: { width: '450px' },
                    }}
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <POpovers 
                        practice={item.practice}
                        year={item.year}
                        projects={item.project}
                        amount={item.pnumber}
                        workforce={item.workforce}
                        number={item.number}
                        text={item.text}
                        />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
            ))}

            
            {/* <button className='toggle_btn' ></button> */}
          </div>

          <div className='languages_title'>
            Azure
          </div>
          <div className='item_of_lanuage'>
            {Azure.map((item) => (
              <div className='item_group'

              >

                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <div className='img'
                        variant="contained" {...bindTrigger(popupState)}>
                        <img src={item.image} width={55} height={55} />
                      </div>
                      <Popover
                    PaperProps={{
                      style: { width: '450px' },
                    }}
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <POpovers 
                        practice={item.practice}
                        year={item.year}
                        projects={item.project}
                        amount={item.pnumber}
                        workforce={item.workforce}
                        number={item.number}
                        text={item.text}
                        />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
            ))}

            
            {/* <button className='toggle_btn' ></button> */}
          </div>
          <div className='languages_title'>
            Cloud
          </div>
          <div className='item_of_lanuage'>
            {cloud.map((item) => (
              <div className='item_group'

              >

                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <div className='img'
                        variant="contained" {...bindTrigger(popupState)}>
                        <img src={item.image} width={55} height={55} />
                      </div>
                      <Popover
                    PaperProps={{
                      style: { width: '450px' },
                    }}
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        <POpovers 
                        practice={item.practice}
                        year={item.year}
                        projects={item.project}
                        amount={item.pnumber}
                        workforce={item.workforce}
                        number={item.number}
                        text={item.text}
                        />
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
            ))}

            
{/* <button class="t-item-group-show-items" aria-label="Show all technologies"></button> */}
          </div>
          </div>

          

          {/* database section ends here */}
    </div>
  )
}

export default Stacks
