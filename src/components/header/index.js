import React, { useState } from 'react';
import { Link as ReachRouterLink  } from 'react-router-dom';

import { Background, Container, Logo, ButtonLink, Feature, Text, FeatureCallOut, Link, Group, Picture, Profile, Dropdown, Search, SearchIcon, SearchInput, PlayButton } from './styles/header'


export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background { ...restProps }>{children}</Background> : children;
}

Header.Profile = function HeaderProfile({children, ...restProps}) {
    return <Profile {...restProps}>{children}</Profile>
}

Header.Feature = function HeaderFeature({ children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps}) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} placeholder="Search films and series" active={searchActive} />
        </Search>
    )
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Frame = function HeaderFrame({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Group = function HeaderGroup({ children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>;
}

Header.Picture = function HeaderPicture({ src, ...restProps}) {
    return <Picture {...restProps} src={`/images/users/${src}.png`}/>;
}

Header.ButtonLink = function HeaderButtonLink({ ...restProps}) {
    return <ButtonLink {...restProps} />
}

Header.Logo = function HeaderLogo({ to, ...restProps}) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps}) {
    return <PlayButton {...restProps}>{children}</PlayButton>
}

