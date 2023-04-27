import React, { FC } from 'react'
import { Button, Col, Divider, Drawer, FloatButton, Row, Switch, Tooltip, Typography } from 'antd'
import { LayoutOutlined, RedoOutlined, SettingOutlined } from '@ant-design/icons'
import './setting.style.scss'
import { useThemeSettings } from '@core/components/ngx-theme-setting/setting.hook'
import { ThemeStyle } from '@core/enums/theme.enum'

const { Text } = Typography

/**
 * Ngx theme settings drawer
 * @constructor
 */
const NgxThemeSettings: FC = () => {
  const {
    isOpen,
    handleOpenThemeSetting,
    handleSettingTheme,
    themeSettings,
    translate,
    listThemeColors,
    appState,
    handleChangeGlobalSpinner,
    handleChangeNavigationMode,
    resetSettings
  } = useThemeSettings()
  const { mode, themeColor } = themeSettings
  const { isLoading, sidebar } = appState
  const activeIcon = (
    <span
      role="img"
      aria-label="check"
      className="anticon anticon-check ant-pro-setting-drawer-block-checkbox-selectIcon">
      <svg
        viewBox="64 64 896 896"
        focusable="false"
        data-icon="check"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
        data-darkreader-inline-fill="">
        <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
      </svg>
    </span>
  )
  return (
    <>
      <FloatButton
        icon={<LayoutOutlined />}
        className="ngx-theme-setting"
        tooltip={translate('settings.theme.settingThemeTooltip')}
        onClick={handleOpenThemeSetting}
        shape="circle"
      />
      <Drawer
        title={translate('settings.theme.title')}
        placement="right"
        closable={false}
        onClose={handleOpenThemeSetting}
        open={isOpen}
        className="ngx-theme-settings-drawer"
        key="theme-settings-drawer">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Text strong>{translate('settings.theme.modeTitle')}</Text>
            <Row style={{ marginTop: 16 }}>
              <Col span={5} className="light-theme">
                <Tooltip title={translate('settings.theme.lightModeTitle')}>
                  <div
                    onClick={() => handleSettingTheme(ThemeStyle.LIGHT, themeSettings.themeColor)}
                    className="ant-pro-setting-drawer-block-checkbox-item ant-pro-setting-drawer-block-checkbox-item-light ant-pro-setting-drawer-block-checkbox-theme-item">
                    {mode === ThemeStyle.LIGHT && activeIcon}
                  </div>
                </Tooltip>
              </Col>

              <Col span={5} className="dark-theme">
                <Tooltip title={translate('settings.theme.darkModeTitle')}>
                  <div
                    onClick={() => handleSettingTheme(ThemeStyle.DARK, themeSettings.themeColor)}
                    className="ant-pro-setting-drawer-block-checkbox-item ant-pro-setting-drawer-block-checkbox-item-realDark ant-pro-setting-drawer-block-checkbox-theme-item">
                    {mode === ThemeStyle.DARK && activeIcon}
                  </div>
                </Tooltip>
              </Col>
            </Row>
          </Col>

          <Col span={24} className="ngx-color-setting">
            <Divider />
            <Text strong>{translate('settings.theme.colorTitle')}</Text>
            <Row gutter={[12, 12]} style={{ marginTop: 5 }}>
              {listThemeColors.map(({ color, label }) => (
                <Col span={2} key={color}>
                  <Tooltip title={label}>
                    <div
                      className="theme-color-block"
                      data-darkreader-inline-bgcolor=""
                      style={{ backgroundColor: color }}
                      onClick={() => handleSettingTheme(mode, color)}>
                      {themeColor === color && (
                        <span role="img" aria-label="check" className="anticon anticon-check">
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="check"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                          </svg>
                        </span>
                      )}
                    </div>
                  </Tooltip>
                </Col>
              ))}
            </Row>
          </Col>

          <Col span={24} className="ngx-navigation-setting mt-4">
            <Text className="w-full" strong>
              {translate('settings.theme.navigationMode')}
            </Text>

            <Row gutter={[12, 12]}>
              <Col span={5} className="left-sidebar-mode mt-4">
                <div
                  onClick={() => handleChangeNavigationMode(true)}
                  className="ant-pro-setting-drawer-block-checkbox-item ant-pro-setting-drawer-block-checkbox-item-side ant-pro-setting-drawer-block-checkbox-layout-item">
                  {sidebar?.isEnabled && activeIcon}
                </div>
              </Col>

              <Col span={5} className="only-top-header mt-4">
                <div
                  onClick={() => handleChangeNavigationMode(false)}
                  className="ant-pro-setting-drawer-block-checkbox-item ant-pro-setting-drawer-block-checkbox-item-top ant-pro-setting-drawer-block-checkbox-layout-item">
                  {!sidebar?.isEnabled && activeIcon}
                </div>
              </Col>
            </Row>
          </Col>

          <Col span={24} className="ngx-global-spinner mt-4">
            <Text className="w-full" strong>
              {translate('settings.theme.globalSpinner')}
            </Text>
            <br />
            <Switch defaultChecked={isLoading} onChange={handleChangeGlobalSpinner} className="mt-3" />
          </Col>

          <Col span={24} className="reset-setting mt-4">
            <Divider />
            <Button type="primary" icon={<RedoOutlined />} onClick={resetSettings}>
              {translate('settings.theme.resetSetting')}
            </Button>
          </Col>
        </Row>
      </Drawer>
    </>
  )
}

export default NgxThemeSettings
