import { Chip, Paper, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useState } from "react";

export function TagsContainer () {
    const [selecteds, setSelecteds] = useState([]);

    const onChange = (value, reason) => {
        setSelecteds(value);
    }

    return (
        <Paper style={{padding: 12}}>
            <Autocomplete
                multiple
                size="small"
                options={[]}
                value={selecteds}
                freeSolo
                onChange={(e, v, r) => onChange(v, r)}
                getOptionLabel={(option) => option.name}
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip
                            variant="outlined"
                            style={{backgroundColor: '#eee', textShadow: '1px 1px 1px #000', color: 'white'}}
                            label={option.name}
                            {...getTagProps({ index })}
                            size="small"
                        />
                    ))
                }
                renderInput={(params) => (
                    <TextField {...params} variant="outlined" placeholder="Tags" />
                )}
                PaperComponent={({ children }) => (
                    <Paper style={{width: 400, marginLeft: 12}}>
                        {children}
                    </Paper>
                )}
            />
        </Paper>
    )
}
