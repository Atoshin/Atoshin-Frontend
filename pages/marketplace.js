import classes from '../styles/Marketplace/Marketplace.module.scss'
import {FormControl, MenuItem, Select} from "@mui/material";

export default function Marketplace() {


    return <div className={classes.main}>
        <h1 className={classes.mainTitle}>Marketplace</h1>
        <hr className={classes.hr}/>
        {/*<div className={classes.filter}>*/}
        {/*    Sort by*/}
        {/*    <FormControl className={classes.formControl} classes size={"small"}>*/}
        {/*        <Select*/}
        {/*            labelId="demo-simple-select-label"*/}
        {/*            id="demo-simple-select"*/}
        {/*            value="Newest"*/}
        {/*            placeholder="Newest"*/}
        {/*            // onChange={handleChange}*/}
        {/*        >*/}
        {/*            <MenuItem value={10}>Ten</MenuItem>*/}
        {/*            <MenuItem value={20}>Twenty</MenuItem>*/}
        {/*            <MenuItem value={30}>Thirty</MenuItem>*/}
        {/*        </Select>*/}
        {/*    </FormControl>*/}
        {/*</div>*/}

        <div className={classes.items}>
            <div className={classes.card}>
                <div className={classes.cardImg} style={{
                    backgroundImage: 'url("images/artworks/marketplace.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}/>
                <div className={classes.cardDetails}>
                    <div>
                        <h3 className={classes.artworkName}>Spring Hunt</h3>
                        <div className={classes.artistSec}>
                            <p className={classes.artistLabel}>Artist:</p>
                            <h2 className={classes.artistName}>Reza Derakhshani</h2>
                        </div>
                    </div>
                    <div className={classes.saleDetails}>
                        <div className={classes.column}>
                            <p className={classes.fractionsLeft}>Fractions left</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>34</p>
                            <p className={classes.total}>/100</p>
                            </span>
                        </div>
                        <div className={classes.column}>
                            <p className={classes.fractionsLeft}>Price</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>0.4</p>
                            <p className={classes.total}>ETH</p>
                            </span>
                        </div>
                        <div className={classes.column} style={{paddingRight: 16}}>
                            <p className={classes.fractionsLeft}>Ending in</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>4d 20h 24m</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.cardImg} style={{
                    backgroundImage: 'url("images/artworks/marketplace.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}/>
                <div className={classes.cardDetails}>
                    <div>
                        <h3 className={classes.artworkName}>Spring Hunt</h3>
                        <div className={classes.artistSec}>
                            <p className={classes.artistLabel}>Artist:</p>
                            <h2 className={classes.artistName}>Reza Derakhshani</h2>
                        </div>
                    </div>
                    <div className={classes.saleDetails}>
                        <div className={classes.column}>
                            <p className={classes.fractionsLeft}>Fractions left</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>34</p>
                            <p className={classes.total}>/100</p>
                            </span>
                        </div>
                        <div className={classes.column}>
                            <p className={classes.fractionsLeft}>Price</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>0.4</p>
                            <p className={classes.total}>ETH</p>
                            </span>
                        </div>
                        <div className={classes.column} style={{paddingRight: 16}}>
                            <p className={classes.fractionsLeft}>Ending in</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>4d 20h 24m</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.cardImg} style={{
                    backgroundImage: 'url("images/artworks/marketplace.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}/>
                <div className={classes.cardDetails}>
                    <div>
                        <h3 className={classes.artworkName}>Spring Hunt</h3>
                        <div className={classes.artistSec}>
                            <p className={classes.artistLabel}>Artist:</p>
                            <h2 className={classes.artistName}>Reza Derakhshani</h2>
                        </div>
                    </div>
                    <div className={classes.saleDetails}>
                        <div className={classes.column}>
                            <p className={classes.fractionsLeft}>Fractions left</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>34</p>
                            <p className={classes.total}>/100</p>
                            </span>
                        </div>
                        <div className={classes.column}>
                            <p className={classes.fractionsLeft}>Price</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>0.4</p>
                            <p className={classes.total}>ETH</p>
                            </span>
                        </div>
                        <div className={classes.column} style={{paddingRight: 16}}>
                            <p className={classes.fractionsLeft}>Ending in</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>4d 20h 24m</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.cardImg} style={{
                    backgroundImage: 'url("images/artworks/marketplace.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}/>
                <div className={classes.cardDetails}>
                    <div>
                        <h3 className={classes.artworkName}>Spring Hunt</h3>
                        <div className={classes.artistSec}>
                            <p className={classes.artistLabel}>Artist:</p>
                            <h2 className={classes.artistName}>Reza Derakhshani</h2>
                        </div>
                    </div>
                    <div className={classes.saleDetails}>
                        <div className={classes.column}>
                            <p className={classes.fractionsLeft}>Fractions left</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>34</p>
                            <p className={classes.total}>/100</p>
                            </span>
                        </div>
                        <div className={classes.column}>
                            <p className={classes.fractionsLeft}>Price</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>0.4</p>
                            <p className={classes.total}>ETH</p>
                            </span>
                        </div>
                        <div className={classes.column} style={{paddingRight: 16}}>
                            <p className={classes.fractionsLeft}>Ending in</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>4d 20h 24m</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.cardImg} style={{
                    backgroundImage: 'url("images/artworks/marketplace.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}/>
                <div className={classes.cardDetails}>
                    <div>
                        <h3 className={classes.artworkName}>Spring Hunt</h3>
                        <div className={classes.artistSec}>
                            <p className={classes.artistLabel}>Artist:</p>
                            <h2 className={classes.artistName}>Reza Derakhshani</h2>
                        </div>
                    </div>
                    <div className={classes.saleDetails}>
                        <div className={classes.column}>
                            <p className={classes.fractionsLeft}>Fractions left</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>34</p>
                            <p className={classes.total}>/100</p>
                            </span>
                        </div>
                        <div className={classes.column}>
                            <p className={classes.fractionsLeft}>Price</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>0.4</p>
                            <p className={classes.total}>ETH</p>
                            </span>
                        </div>
                        <div className={classes.column} style={{paddingRight: 16}}>
                            <p className={classes.fractionsLeft}>Ending in</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>4d 20h 24m</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.cardImg} style={{
                    backgroundImage: 'url("images/artworks/marketplace.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}/>
                <div className={classes.cardDetails}>
                    <div>
                        <h3 className={classes.artworkName}>Spring Hunt</h3>
                        <div className={classes.artistSec}>
                            <p className={classes.artistLabel}>Artist:</p>
                            <h2 className={classes.artistName}>Reza Derakhshani</h2>
                        </div>
                    </div>
                    <div className={classes.saleDetails}>
                        <div className={classes.column}>
                            <p className={classes.fractionsLeft}>Fractions left</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>34</p>
                            <p className={classes.total}>/100</p>
                            </span>
                        </div>
                        <div className={classes.column}>
                            <p className={classes.fractionsLeft}>Price</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>0.4</p>
                            <p className={classes.total}>ETH</p>
                            </span>
                        </div>
                        <div className={classes.column} style={{paddingRight: 16}}>
                            <p className={classes.fractionsLeft}>Ending in</p>
                            <span className={classes.fractions}>
                            <p className={classes.leftNumbers}>4d 20h 24m</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}