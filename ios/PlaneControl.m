//
//  PlaneControl.m
//  naturpoint
//
//  Created by router on 18/1/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "PlaneControl.h"
#import <React/RCTLog.h>

@implementation PlaneControl






-(void)initData:(unsigned char *) buff void:(unsigned char *) speacialParameterArray
{
  buff[0] = 0xCC;
  buff[5] = 0x00;
  buff[6] = 0x40;
  buff[7] = 0x40;
  buff[8] = 0x40;
  buff[10] = 0x33;
  
  buff[1] = 0x80;
  
  buff[2] = 0x80;
  
  buff[3] = 0x80;
  
  buff[4] = 0x80;
  
  speacialParameterArray[0] = 0;
  speacialParameterArray[1] = 0;
  speacialParameterArray[2] = 0;
  speacialParameterArray[3] = 0;
  speacialParameterArray[4] = 0;
  speacialParameterArray[5] = 0;
  speacialParameterArray[6] = 0;
  speacialParameterArray[7] = 0;
  
  
}

- (void)sendCommandData:(unsigned char *)buff sendCommandData:(unsigned char *)speacialParameterArray sendCommandData:(unsigned char )speacial
{
  
 //    [[AbeCmdModel sharedInstance] sendCmd:buff leng:10];
  
  speacial=0x00|speacialParameterArray[0]|(speacialParameterArray[1]<<1)|(speacialParameterArray[2]<<2)|(speacialParameterArray[3]<<3|speacialParameterArray[4]<<4|speacialParameterArray[5]<<5 | speacialParameterArray[6]<<6|speacialParameterArray[7]<<7 );
  
  buff[5] = speacial;
  
  buff[9] = buff[1]^buff[2]^buff[3]^buff[4]^buff[5]^buff[6]^buff[7]^buff[8];
  
  //    NSLog(@"pushCmd:  %d,  %d,  %d,  %d,  %d,  %d,  %d,  %d,  %d,  %d,  %d\n", buff[0], buff[1], buff[2], buff[3], buff[4], buff[5], buff[6], buff[7], buff[8], buff[9], buff[10]);

}


RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback){
  NSString *events = @"initData";
  callback(@[[NSNull null], events]);
}

@end
