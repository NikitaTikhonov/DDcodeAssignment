package com.dietdoctorassignment;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate; // <- add this necessary import
import androidx.core.splashscreen.SplashScreen;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {

      @Override
      protected void loadApp(String appKey) {
        SplashScreen.installSplashScreen(MainActivity.this);
        super.loadApp(appKey);
      }
    };
  }

  @Override
  protected String getMainComponentName() {
    return "DietDoctorAssignment";
  }
}
