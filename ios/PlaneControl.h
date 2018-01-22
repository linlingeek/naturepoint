//
//  PlaneControl.h
//  naturpoint
//
//  Created by router on 18/1/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface PlaneControl : NSObject <RCTBridgeModule>
-(void)initData:(unsigned char *) buff void:(unsigned char *) speacialParameterArray;
@end
